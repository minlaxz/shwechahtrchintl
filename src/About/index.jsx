import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';
import axios from 'axios';

const About = () => {
    const [commitSha, setCommitSha] = React.useState(null);
    const [commitDate, setCommitDate] = React.useState(null);

    React.useEffect(() => {
        document.title = 's.c.h.c.t | about'
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
                <h2 className="cyan-text">Hello, weed!</h2>
                <code className="gold-text">ရွှေချထားချင်တယ်။ 🤪</code>
                <p className="white-text"> Here is the
                    <a href="https://github.com/minlaxz/shwechahtrchintl#readme" rel="noreferrer noopener" target="_blank"
                        class="source-text"> Source Code or Documentation
                    </a>
                </p>
                <small> sha : 
                    {
                        commitSha ? 
                        `${commitSha}` : 'Fetching last commit SHA, please weed...'
                    }
                </small>
                <small> date : 
                    {
                        commitDate ? `${commitDate}` : 'Fetching last commit date, please weed...'
                    }
                </small>
                {commitSha && <a a href={`https://github.com/minlaxz/shwechahtrchintl/commit/${commitSha}`} target="_blank" rel="noreferrer noopener">check the branch</a>}
                <br></br>
                <Link to="/">Go back to Home 🏠</Link>
            </div>

        </>
    );
}

export default About;