import React, { useState, useMemo, useCallback, useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import { useHistory, useLocation } from '@docusaurus/router';
import CommunityHeader from '../../components/community/CommunityHeader';
import FullWidthCard from '../../components/general/FullWidthCard';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const TITLE = '幻想纹章 社区';
const DESCRIPTION =
  '幻想纹章已经存在多年，所以你会在很多地方找到相关内容。这里我们列出了幻想纹章的各种社区。';

function Community() {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <CommunityHeader title={TITLE} description={DESCRIPTION} />
      <main className="container margin-vert--lg">
        {/* 网站 - 卓越逻辑 */}
        <FullWidthCard
          left={
            <div>
              <div>
                <img src="/images/tags/web.png" />
              </div>
              <h3>卓越逻辑</h3>
              <p>
                卓越逻辑【zygameui.cn】，幻想纹章唯一指定官方网站。
              </p>
              <div>
                <Link
                  className="button button--primary button--md"
                  to="https://zygameui.cn/"
                >
                  卓越逻辑 &#10132;
                </Link>
              </div>
            </div>
          }
          right={
            <div className={styles.screenshot}>
              <img src="/images/zygameui.cn_screen.png" />
            </div>
          }
        />

        {/* 网站 - 幻想纹章Club */}
        <FullWidthCard
          left={
            <div>
              <div>
                <img src="/images/tags/web.png" />
              </div>
              <h3>幻想纹章Club</h3>
              <p>
                幻想纹章Club【hxwz3.cn】，来源于幻想纹章3交流群（其实就是本站咯）。
              </p>
              <div>
                <Link
                  className="button button--primary button--md"
                  to="https://hxwz3.cn/"
                >
                  幻想纹章Club &#10132;
                </Link>
              </div>
            </div>
          }
          right={
            <div className={styles.screenshot}>
              <img src="/images/hxwz3.cn_screen.png" />
            </div>
          }
        />

        {/* 网站 - 幻纹笔记 */}
        <FullWidthCard
          left={
            <div>
              <div>
                <img src="/images/tags/web.png" />
              </div>
              <h3>幻纹笔记</h3>
              <p>
                幻纹笔记【hxwz2.cn】，是灵风创建的幻想纹章2及幻想纹章Next网站，可以登录注册并且发布、下载角色包。
              </p>
              <div>
                <Link
                  className="button button--primary button--md"
                  to="https://hxwz2.cn/"
                >
                  幻纹笔记 &#10132;
                </Link>
              </div>
            </div>
          }
          right={
            <div className={styles.screenshot}>
              <img src="/images/hxwz2.cn_screen.png" />
            </div>
          }
        />

        {/* 百度贴吧 - 幻想纹章吧 */}
        <FullWidthCard
          left={
            <div>
              <div>
                <img src="/images/baidutieba_logo.png" />
              </div>
              <h3>幻想纹章吧</h3>
              <p>
                幻想纹章吧，是幻想纹章系列官方游戏综合贴吧。
              </p>
              <div>
                <Link
                  className="button button--primary button--md"
                  to="https://tieba.baidu.com/f?kw=幻想纹章"
                >
                  幻想纹章吧 &#10132;
                </Link>
              </div>
            </div>
          }
          right={
            <div className={styles.screenshot}>
              <img src="/images/hxwzba_screen.png" />
            </div>
          }
        />

        

        {/* GITHUB - Discussions */}
        {/* <FullWidthCard
          left={
            <div>
              <div>
                <img src="/images/discussions.svg" />
              </div>
              <h3>Discussions</h3>
              <p>
                Get involved with the AIR community in the discussion forum on GitHub.
                This space is used by AIR developers to ask questions about development
                with AIR.
              </p>
              <div>
                <Link
                  className="button button--primary button--md"
                  to="https://github.com/airsdk/Adobe-Runtime-Support/discussions"
                >
                  Get involved &#10132;
                </Link>
              </div>
            </div>
          }
          right={
            <div className={styles.screenshot}>
              <img src="/images/github_discussions_screen.png" />
            </div>
          }
        /> */}

        {/* GITHUB - Issues */}
        {/* <FullWidthCard
          left={
            <div>
              <div>
                <img src="/images/GitHub_Logo.png" />
              </div>
              <h3>Issue Tracker</h3>
              <p>
                Run into an issue or have a feature you would like to get added to AIR,
                head to the GitHub issue tracker.
              </p>
              <div>
                <Link
                  className="button button--primary button--md"
                  to="https://github.com/airsdk/Adobe-Runtime-Support/issues"
                >
                  See the issue tracker &#10132;
                </Link>
              </div>
            </div>
          }
          right={
            <div className={styles.screenshot}>
              <img src="/images/github_issuetracker_screen.png" />
            </div>
          }
        /> */}

        {/* STARLING FORUM */}
        {/* <FullWidthCard
          left={
            <div>
              <div>
                <img src="/images/starling_logo.png" />
              </div>
              <h3>Starling Forum</h3>
              <p>
                Starling is one of the widest used libraries for AIR and the forum is very
                active not only for support on Starling but anything related to AIR
                development.
              </p>
              <div>
                <Link
                  className="button button--primary button--md"
                  to="https://forum.starling-framework.org/"
                >
                  Forum &#10132;
                </Link>
              </div>
            </div>
          }
          right={
            <div className={styles.screenshot}>
              <img src="/images/starling_forum_screen.png" />
            </div>
          }
        /> */}
        
        {/* DISCORD */}
        {/* <FullWidthCard
          left={
            <div>
              <div>
                <img src="/images/discord_logo.svg" width="80px" />
              </div>
              <h3>Discord</h3>
              <p>
                Join the fellow AIR developers on the AIRSDK discord server and discuss AIR development in real time.
              </p>
              <div>
                <Link
                  className="button button--primary button--md"
                  to="https://discord.gg/pxbfJTqMZt"
                >
                  Join &#10132;
                </Link>
              </div>
            </div>
          }
          right={
            <div className={styles.screenshot}>
              <img src="/images/discord_screen.png" />
            </div>
          }
        /> */}

      </main>
    </Layout>
  );
}

export default Community;
