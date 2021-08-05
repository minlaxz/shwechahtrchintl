import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';
import axios from 'axios';

const About = () => {
    const [commitSha, setCommitSha] = React.useState(null);
    const [commitDate, setCommitDate] = React.useState(null);

    React.useEffect(() => {
        document.title = 's.c.h.c.t | about 🤷‍♀️'
        const fetchCommitSha = async () => {
            const commitsOnMain = await axios('https://api.github.com/repos/minlaxz/shwechahtrchintl/branches/main')
            setCommitSha(commitsOnMain.data.commit.sha)
            setCommitDate(commitsOnMain.data.commit.commit.author.date)
        }
        fetchCommitSha();
    }, []);

    return (
        <>
            <div className={`${styles.root_container}`}>
                <h3>Hello, weed! 🥴</h3>
                <p className="gold-text">ရွှေချထားချင်တယ်။ 🤪</p>
                <p className="white-text"> Here is the
                    <a href="https://github.com/minlaxz/shwechahtrchintl" rel="noreferrer noopener" target="_blank"
                        class="source-text"> Source Code
                    </a> or
                    <a href="https://github.com/minlaxz/shwechahtrchintl#readme" rel="noreferrer noopener" target="_blank"
                        class="source-text"> Documentation
                    </a>

                </p>
                {commitSha && <a a href={`https://github.com/minlaxz/shwechahtrchintl/commit/${commitSha}`} target="_blank" rel="noreferrer noopener">check@commitSha</a>}
                <code> last commit date :
                    {
                        commitDate ? `${commitDate}` : 'Fetching last commit date, please weed...'
                    }
                </code>
                <code> sha :
                    {
                        commitSha ?
                            `${commitSha}` : 'Fetching last commit SHA, please weed...'
                    }
                </code>
                <Link to="/">This is complicated 🥴, just go back to Home 🏠</Link>
                <div>
                    <ul>
                        <li>Created by <a href="https://minlaxz.me" rel="noreferrer noopener" target="_blank">minlaxz</a> and used...</li>
                        <li><a rel="noreferrer noopener" target="_blank" href="https://vitejs.dev/">Vite</a> build tool FAST!</li>
                        <li><a rel="noreferrer noopener" target="_blank" href="https://reactjs.org/">React JS</a></li>
                        <li><a rel="noreferrer noopener" target="_blank" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Flex</a> CSS</li>
                        <li><a rel="noreferrer noopener" target="_blank" href="https://github.com/css-modules/css-modules">CSS Moudles</a></li>
                        <li><a rel="noreferrer noopener" target="_blank" href="https://www.freenom.com/en/index.html?lang=en">Freenom</a>for free domain name</li>
                        <li><a rel="noreferrer noopener" target="_blank" href="https://www.cloudflare.com/">Cloudflare</a> for SSL/TLS</li>
                        <li><a rel="noreferrer noopener" target="_blank" href="https://github.com/minlaxz/shwechahtrchintl/blob/2393b1b79c1b7e73113860e47b562f011daf7028/CNAME#L1">CNAME and APEX</a> for DNS routings</li>
                        <li><a rel="noreferrer noopener" target="_blank" href="https://pages.github.com/">Github Pages</a> for serving static files</li>
                        <li><a rel="noreferrer noopener" target="_blank" href="https://docs.github.com/en/actions/learn-github-actions">Github Actions</a> for automated CI</li>
                        <li><a rel="noreferrer noopener" target="_blank" href="https://reactrouter.com/web/api/HashRouter">HashRouter</a> for frontend routing like GH Pages</li>
                        <li>This is also avaiable on &nbsp;
                        <a rel="noreferrer noopener" target="_blank" href="https://shwechahtrchintl.pages.dev">Cloudflare Pages</a> &
                        <a rel="noreferrer noopener" target="_blank" href="https://shwechahtrchintl.ml"> Github Pages</a>
                        </li>
                        <hr/>
                    </ul>
                </div>
            </div>

        </>
    );
}

export default About;