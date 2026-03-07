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

        {/* QQ - QQ群 */}
        <FullWidthCard
          left={
            <div id="qq_group">
              <div>
                <img src="/images/qq_group_logo.svg" />
              </div>
              <h3>QQ群</h3>
              <p>
                幻想纹章最大、最活跃的交流社区。各种版本各种群，应有尽有。
              </p>
              <div>
                <Link
                  className="button button--primary button--md"
                  to="https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=7s6dAv2pQN0FD7dNI46m4D0UjTiYMZhl&authKey=YvpDB%2BpR93JCKLrq4BzUYLiUBRws%2ByhwZEhyULFb0RE%2FYwTl1cis3upA8DAFHTIl&noverify=0&group_code=159281448"
                >
                  幻想纹章官方交流群 &#10132;
                </Link>
              </div>
              <p></p>
              <div>
                <Link
                  className="button button--primary button--md"
                  to="https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=4usaWCuebphdnZUYRePZTEmhRGkdtj0X&authKey=jY9MZ85xcC%2Biax2cliQ1Q4nopA4CHbW4W9QPrSim%2BsUEvN840v5zonUih7WyHByG&noverify=0&group_code=819801973"
                >
                  幻想纹章官方交流2群 &#10132;
                </Link>
              </div>
              <p></p>
              <div>
                <Link
                  className="button button--primary button--md"
                  to="https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=kq4mtuaAnUKaPq6absueyJX7qD2erLdW&authKey=zZd77ZYsJfOJi2OYwdFnk7nJvsV%2FSzCcqtYB4KBuDQgUNf%2F0TrHaxkTveJCOcImD&noverify=0&group_code=1050779265"
                >
                  幻想纹章4交流群 &#10132;
                </Link>
              </div>
              <p></p>
              <div>
                <Link
                  className="button button--primary button--md"
                  to="https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=NKKmX64I09HS90RrF-0lABHCy_Pbk-ZG&authKey=KcyDbNw%2F17UKTfofV1dm4KRyvuIz7r3KF3OfZk50SFjEYvgfk5RWAhLEHBMHEsT8&noverify=0&group_code=1055702064"
                >
                  幻想纹章3交流群 &#10132;
                </Link>
              </div>
              <p></p>
              <div>
                <Link
                  className="button button--primary button--md"
                  to="https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=TK0P0CIpBwhyCQiEEzUsJOwpPlp94P0n&authKey=tWr7ZOyeLeP10NaUdxj9B7VaQtVXGwRxunCFDWH1nM%2FDIDCuWHD1lyAmLMUzOJq4&noverify=0&group_code=1071290329"
                >
                  幻想纹章3交流2群 &#10132;
                </Link>
              </div>
              <p></p>
              <div>
                <Link
                  className="button button--primary button--md"
                  to="https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=TAMtzC2Q3wLvQhWTXrwK420ic3wvoX2X&authKey=WWfXbh9wx%2BURjCuc6pxwr1t90CN3tthSIXpDlGaQR4fmCDNlWYmrJ%2Fuap0Ydrjsg&noverify=0&group_code=834796120"
                >
                  幻想纹章2萌新群 &#10132;
                </Link>
              </div>
            </div>
          }
          right={
            <div className={styles.screenshot} id="qq_group">
              <img src="/images/qq_group_screen.png" />
            </div>
          }
        />

        {/* bilibili - b站账号 */}
        <FullWidthCard
          left={
            <div>
              <div>
                <img src="/images/bilibili_logo.svg" />
              </div>
              <h3>b站账号</h3>
              <p>
                幻想纹章主要内容输出平台。
              </p>
              <div>
                <Link
                  className="button button--primary button--md"
                  to="https://space.bilibili.com/29530718"
                >
                  左眼sang &#10132;
                </Link>
              </div>
              <p></p>
              <div>
                <Link
                  className="button button--primary button--md"
                  to="https://space.bilibili.com/1120918222"
                >
                  幻想纹章4官方号 &#10132;
                </Link>
              </div>
              <p></p>
              <div>
                <Link
                  className="button button--primary button--md"
                  to="https://space.bilibili.com/88751422"
                >
                  幻想纹章2官方账号 &#10132;
                </Link>
              </div>
              <p></p>
              <div>
                <Link
                  className="button button--primary button--md"
                  to="https://space.bilibili.com/96671971"
                >
                  幻想纹章3账号 &#10132;
                </Link>
              </div>
            </div>
          }
          right={
            <div className={styles.screenshot}>
              <img src="/images/bilibili_screen.png" />
            </div>
          }
        />

        {/* 4399 - 4399幻想纹章 */}
        <FullWidthCard
          left={
            <div>
              <div>
                <img src="/images/4399_logo.gif" />
              </div>
              <h3>4399幻想纹章</h3>
              <p>
                4399小游戏，是幻想纹章唯一上架的游戏平台，也是大多数人最早接触幻想纹章的地方。
              </p>
              <div>
                <Link
                  className="button button--primary button--md"
                  to="https://so2.4399.com/search/search.php?k=幻想纹章"
                >
                  4399幻想纹章 &#10132;
                </Link>
              </div>
            </div>
          }
          right={
            <div className={styles.screenshot}>
              <img src="/images/4399_screen.png" />
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
                幻纹笔记【hxwz2.cn】，是灵风创建的幻想纹章2及幻想纹章2新章官网，可以登录注册并发布、下载角色包。
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

        {/* QQ - 腾讯频道 */}
        <FullWidthCard
          left={
            <div>
              <div>
                <img src="/images/txpd_logo.svg" />
              </div>
              <h3>腾讯频道</h3>
              <p>
                幻想纹章的QQ频道。
              </p>
              <div>
                <Link
                  className="button button--primary button--md"
                  to="https://pd.qq.com/g/pdhxwzyyds"
                >
                  幻想纹章 &#10132;
                </Link>
              </div>
              <p></p>
              <div>
                <Link
                  className="button button--primary button--md"
                  to="https://pd.qq.com/g/HuanWen2XiLie"
                >
                  幻想纹章综合频道 &#10132;
                </Link>
              </div>
            </div>
          }
          right={
            <div className={styles.screenshot}>
              <img src="/images/txpd_screen.png" />
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
              <h3>百度贴吧</h3>
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
