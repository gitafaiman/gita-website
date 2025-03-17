import {
  faBootstrap,
  faCss3Alt,
  faGit,
  faGithub,
  faHtml5,
  faJs,
  faNodeJs,
  faNpm,
  faReact,
  faYarn,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Slider } from '../../../common';

const Skills: React.FC = () => {
  const languagesFrameworks = [
    <FontAwesomeIcon icon={faJs} title="JavaScript" size="4x" color="#d668ed" />,
    <FontAwesomeIcon icon={faHtml5} title="HTML5" size="4x" color="#d668ed" />,
    <FontAwesomeIcon icon={faCss3Alt} title="CSS3" size="4x" color="#d668ed" />,
    <FontAwesomeIcon icon={faReact} title="React.js" size="4x" color="#d668ed" />,
    <FontAwesomeIcon icon={faBootstrap} title="Bootstrap" size="4x" color="#d668ed" />,
  ];

  const toolsAndLibraries = [
    <FontAwesomeIcon icon={faNodeJs} title="Node.js" size="4x" color="#d668ed" />,
    <FontAwesomeIcon icon={faNpm} title="npm" size="4x" color="#d668ed" />,
    <FontAwesomeIcon icon={faYarn} title="Yarn" size="4x" color="#d668ed" />,
    <FontAwesomeIcon icon={faGit} title="Git" size="4x" color="#d668ed" />,
    <FontAwesomeIcon icon={faGithub} title="GitHub" size="4x" color="#d668ed" />,
    <FontAwesomeIcon icon={faDatabase} title="Databases (Placeholder)" size="4x" color="#d668ed" />,
  ];

  return (
    <div>
      <Slider items={languagesFrameworks} direction="left" />
      <Slider items={toolsAndLibraries} direction="right" />
    </div>
  );
};

export default Skills;
