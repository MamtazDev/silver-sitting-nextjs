// 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,


import { useEffect, useState } from 'react';

const Repositories = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/MamtazDev/repos', {
          // Replace USERNAME with the GitHub username you want to fetch repositories for
        });
        const data = await response.json();
        // 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
        // Get the last 5 repositories
        const last5Repos = data.slice(0, 5);
        setRepos(last5Repos);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div>
      <h1>GitHub Repositories</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <strong><a href={repo.html_url}>{repo.name}</a></strong>
            <p>{repo.description}</p>
            <p>Language: {repo.language}</p>
            <p>Stars: {repo.stargazers_count}</p>
            <p>Forks: {repo.forks_count}</p>
            {repo.homepage && <p>Website: <a href={repo.homepage}>{repo.homepage}</a></p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Repositories;
