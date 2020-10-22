import React from "react"

import { Row, Col } from 'react-bootstrap'

import { HeaderDate, PageTitle, NearestEvent, PerfomanceIndicators, PerfomanceList } from '../../components'

const Perfomance: React.FC = () => {
	
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
						<PageTitle title="Успеваемость">
							<PerfomanceIndicators />
						</PageTitle>
					</Row>
					<Row>
						<PerfomanceList />
					</Row>
					
				</div>
			</div>
		</Col>
	)
}

export default Perfomance
