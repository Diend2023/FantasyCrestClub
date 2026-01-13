import React, { useEffect, useMemo, useState } from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLocation, useHistory } from '@docusaurus/router';

const TITLE = '在线游戏';
const DESCRIPTION = '在线游玩网页版';

function buildSwfUrlFromVersion(version: string) {
  return `http://119.29.25.101:900/hxwz/${encodeURIComponent(version)}/hxwz.swf`;
}

function detectFlashSupport(): boolean {
  // NPAPI Flash 在现代浏览器基本不可用，但这里按“兼容 Flash 用户”的需求做检测
  try {
    const nav: any = typeof navigator !== 'undefined' ? navigator : null;
    if (nav?.plugins?.length) {
      for (const p of Array.from(nav.plugins as any[])) {
        const name = String(p?.name || '').toLowerCase();
        if (name.includes('shockwave flash')) return true;
      }
    }
  } catch {
    // ignore
  }

  try {
    const w: any = typeof window !== 'undefined' ? window : null;
    if (w?.ActiveXObject) {
      // IE / 老环境
      // eslint-disable-next-line no-new
      new w.ActiveXObject('ShockwaveFlash.ShockwaveFlash');
      return true;
    }
  } catch {
    // ignore
  }

  return false;
}

function PlayInner() {
  const [error, setError] = useState<string>('');

  const location = useLocation();
  const history = useHistory();

  // ruffle 自托管在 static/ruffle/ruffle.js
  const ruffleJsUrl = useBaseUrl('/ruffle/ruffle.js');

  const params = useMemo(() => new URLSearchParams(location.search), [location.search]);

  // 读取参数：version
  const version = (params.get('version') || '').trim();

  // 也支持直接传完整 swf URL（可选）
  const swfOverride = (params.get('swf') || params.get('url') || '').trim();

  const swfUrl = useMemo(() => {
    if (swfOverride) return swfOverride;
    if (version) return buildSwfUrlFromVersion(version);
    return '';
  }, [swfOverride, version]);

  useEffect(() => {
    let cancelled = false;

    async function ensureRuffleScript() {
      if ((window as any).RufflePlayer) return;

      // 可选：在加载脚本前设置配置
      (window as any).RufflePlayer = (window as any).RufflePlayer || {};
      (window as any).RufflePlayer.config = {
        // 这里按需加配置即可；不需要就留空
        autoplay: 'auto',
      };

      await new Promise<void>((resolve, reject) => {
        const s = document.createElement('script');
        s.src = ruffleJsUrl;
        s.async = true;
        s.onload = () => resolve();
        s.onerror = () => reject(new Error(`加载 ruffle.js 失败：${ruffleJsUrl}`));
        document.head.appendChild(s);
      });
    }

    async function mount() {
      setError('');

      if (!swfUrl) return;

      // 有 Flash：让 <object> 自己播放；不要加载 ruffle，避免替换/重复播放器
      if (detectFlashSupport()) return;

      try {
        await ensureRuffleScript();
        if (cancelled) return;

        // 不要手动 createPlayer()
        // 让 ruffle.js 自动把下面的 <object> polyfill 成 ruffle-object
      } catch (e: any) {
        setError(e?.message || String(e));
      }
    }

    mount();

    return () => {
      cancelled = true;
    };
  }, [ruffleJsUrl, swfUrl]);

  function setVersionInUrl(next: string) {
    const sp = new URLSearchParams(location.search);
    if (next.trim()) sp.set('version', next.trim());
    else sp.delete('version');
    history.push({ ...location, search: sp.toString() ? `?${sp.toString()}` : '' });
  }

  return (
    <div className="container margin-vert--lg">
      <h1>{TITLE}</h1>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        <label>
          版本：
          <input
            value={version}
            onChange={(e) => setVersionInUrl(e.target.value)}
            placeholder="例如：1.0.0"
            style={{ marginLeft: 8, padding: '6px 8px', minWidth: 200 }}
          />
        </label>
      </div>

      {/* Flash 优先：有 Flash 插件时由 object 播放；无 Flash 时 ruffle.js 会自动 polyfill 这个 object */}
      <div style={{ marginTop: 16, textAlign: 'center' }}>
        <object data={swfUrl || undefined} width="800" height="600" />
      </div>

      {error ? (
        <div style={{ marginTop: 12, color: 'crimson' }}>
          <strong>Ruffle 加载失败：</strong> {error}
        </div>
      ) : null}
    </div>
  );
}

export default function PlayPage() {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <BrowserOnly fallback={<div className="container margin-vert--lg">正在加载…</div>}>
        {() => <PlayInner />}
      </BrowserOnly>
    </Layout>
  );
}