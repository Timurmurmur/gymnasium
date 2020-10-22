import React from 'react'

import './TitleLink.scss'
import { Link } from 'react-router-dom';


const TitleLink: React.FC<{ url: string, title: string }> = ({ url, title }) => <Link className="title-link" to={url}>{title}</Link>

export default TitleLink