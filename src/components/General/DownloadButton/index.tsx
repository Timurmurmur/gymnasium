import React from 'react'

import './DownloadButton.scss'

const DownloadButton: React.FC<{ url: string }> = ({ url }) => <a className="icon icon--green" href={url}><i className="icon-download"></i></a>

export default DownloadButton