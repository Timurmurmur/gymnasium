import React from "react"

import { Container, Row, Col } from 'react-bootstrap'
import "./Documents.scss";
import { Logo, PupilList, MenuList, SpecialOffer, HeaderDate, PageTitle, NearestEvent, DocumentUpload } from '../../components'

import {DocumentList, DeleteButton, DownloadButton} from "../../components"
import { connect } from "react-redux"
import { loadDocuments, uploadDocuments } from "../../redux/actions/documents"
import { PageStatus } from "../../common/types";
import { State } from "../../redux/store";
//|| own && gymnasium && last
const last = [];

const Documents: React.FC<{
	pageStatus: PageStatus;
	own: Array<any>;
	last: Array<any>;
	gymnasium: Array<any>;
	profilePageStatus: PageStatus;
	loadDocuments: () => void;
	uploadDocument: (file: any) => void;
	selectedProfile: any;
}> = ({ pageStatus, own,last, gymnasium, profilePageStatus, loadDocuments, uploadDocument, selectedProfile }) => {
	React.useEffect(
		() => {
			if (profilePageStatus === PageStatus.LOADED) {
				loadDocuments();
			}
		}, [profilePageStatus, selectedProfile]
	)

	if (pageStatus === PageStatus.LOADED) {
		return (
			<Col className='px-0 position-relative'>
				<div className="cabinet-content custom-scroll">
					<div className="cabinet-content__wrapper">
						<Row>
							<Col className="content-header">
								<HeaderDate />
							</Col>
						</Row>
				
						<Row>
							<Col className="mb-5">
								<Row>
									<PageTitle title="Документы"/>
								</Row>
								<DocumentUpload uploadDocument={uploadDocument} />
								
								{
									last?.length === 0 ?
									<div className="row">
									<div className="col">
										<h4 className="mb-3">Последние загруженные документы</h4>
										<div className="big-media">
											<div className="big-media__img">
											<img src={require('../../assets/img/big-folder.svg')} alt="folder"/>
											</div>
											<div className="big-media__content">
											<h2>Пока что загруженных документов нет</h2>
											<p>Вам необходимо загрузить свидетельство о рождении и паспорт ребенка (если ему исполнилось 14 лет)</p>
											{/* <a href="#" className="btn btn-primary btn--large mt-2">Начать</a> */}
											</div>
										</div>
									</div>
									</div>
									:
									<DocumentList delete={true} documents={last} title="Последние загруженные документы" icon={<DeleteButton />}/>
								}
							</Col>
							<aside className="col-12 col-xl right-sidebar">
								
								<div>
									<DocumentList delete={false} documents={own} title="Документы от Вас" icon={<DownloadButton />} showStatus={false} />
								</div>
							</aside> 
						</Row>

					</div>
				</div>
			</Col>
		)
	} else {
		return (
			<Col className='px-0 position-relative'>
				<div className="cabinet-content custom-scroll">
					<div className="cabinet-content__wrapper">
						<Row>
							<Col className="content-header">
								<HeaderDate />
							</Col>
						</Row>
				
						<Row>
							<Col className="mb-5">
								<Row>
									<PageTitle title="Документы"/>
								</Row>
								<DocumentUpload uploadDocument={uploadDocument} />
								<div>
								<h4 className="mb-3">Последние загруженные документы</h4>
								<ul className="list-group list-group-flush document-list document-list--search document-list--pl right-sidebar__list">
								<li className="list-group-item d-flex align-items-center">
									<div className="document-list__img"></div>
									<div className="document-list__text"></div>
									<div className="document-list__type"></div>
									<div className="document-list__size"></div>
									<div className="document-list__status"></div>
									<div className="document-list__ico"></div>
								</li>
								<li className="list-group-item d-flex align-items-center">
									<div className="document-list__img"></div>
									<div className="document-list__text"></div>
									<div className="document-list__type"></div>
									<div className="document-list__size"></div>
									<div className="document-list__status"></div>
									<div className="document-list__ico"></div>
								</li>
								</ul>
								</div>
							</Col>
							<aside className="col-12 col-xl right-sidebar">
								<div>
								<h4 className="mb-3">Документы от Вас</h4>
								<ul className="list-group list-group-flush document-list document-list--pl document-list--sidebar right-sidebar__list">
									<li className="list-group-item d-flex align-items-center">
									<div className="document-list__text"></div>
									<div className="document-list__type"></div>
									<div className="document-list__size"></div>
									<div className="document-list__ico"></div>
									</li>
									<li className="list-group-item d-flex align-items-center">
									<div className="document-list__text"></div>
									<div className="document-list__type"></div>
									<div className="document-list__size"></div>
									<div className="document-list__ico"></div>
									</li>
									<li className="list-group-item d-flex align-items-center">
									<div className="document-list__text"></div>
									<div className="document-list__type"></div>
									<div className="document-list__size"></div>
									<div className="document-list__ico"></div>
									</li>
								</ul>
								</div>
							</aside> 
						</Row>

					</div>
				</div>
			</Col>
		)
	}
}


/*<aside className="col-12 col-xl right-sidebar">
	<div className="mb-5">
		<DocumentList title="Документы от Гимназии" icon={<DownloadButton />} showStatus={false} />
	</div>
	<div>
		<DocumentList title="Документы от Вас" icon={<DownloadButton />} showStatus={false} />
	</div> 
</aside> */

/*
<div className="mb-5">
	<DocumentList delete={false} documents={gymnasium} title="Документы от Гимназии" icon={<DownloadButton />} showStatus={false} />
</div>
*/
export default connect(
	({ documents, profile }: State) => ({ ...documents, profilePageStatus: profile.pageStatus,selectedProfile: profile.selectedProfile?.id }),
	(dispatch) => {
		return {
			loadDocuments: () => {
				return dispatch(loadDocuments())
			},
			uploadDocument: (file: any) => {
				return dispatch(uploadDocuments(file))
			}
		}
	}
)(Documents)
