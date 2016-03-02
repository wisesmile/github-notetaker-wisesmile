import React from 'react';

/**
 * @todo support multi byte character.
 * @todo cache calculation result.
 */

const Repos = ({repos}) => {
  return (
    <div>
      <h3>User Repos</h3>
      <ul className="list-group">
        {repos.map((repo, index) => {
          return (
            <li className="list-group-item" key={repo.name}>
              {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
              {repo.description && <p>{repo.description}</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

/**
 * propTypes
 * @property {string} username github username
 * @property {string} github repos
 */
Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired,
};

export default Repos;
