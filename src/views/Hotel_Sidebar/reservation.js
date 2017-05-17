import React from 'react';

	let cr = 0;
	let ds = 0;

	const count = [];
	const boxmerge = [];
	const basedate = new Date();
	const countdate = new Date();
	countdate.setDate(countdate.getDate() + 15);

	while(basedate <= countdate) {
		const x = basedate.toLocaleDateString();
		const y = x.split('/').slice(0,2).join('/');
		count.push(<td key={y} className="table-bordered">{y}</td>);
		basedate.setDate(basedate.getDate() + 1);
	}

	const countroom = [];
	const dist = [];

	while(cr <= 10){
		while(ds < 15) {
			dist.push(<td>{ds}</td>);
			ds++;
			
		}
		countroom.push(<tr><td>{cr}</td>{dist}</tr>);
		cr++;
	}



class PageHeader extends React.Component {
	render() {
		return(
			<div className="room-content">
				<table className="table table-bordered">
					<thead>
						<tr>
							<td>
								<button className="btn btn-info btn-sm center-block">
									<i className="fa fa-angle-double-left" aria-hidden="true"></i> Prev
								</button>
							</td>
							{count}
							<td>
								<button className="btn btn-info btn-sm center-block">
									Next <i className="fa fa-angle-double-right" aria-hidden="true"></i>
								</button>
							</td>
						</tr>
					</thead>
					<tbody>
						{countroom}
					</tbody>
				</table>
			</div>
		);
	}
}
const Reservation = ({ match }) => (
	<div className="col-lg-12 col-md-12">
		<PageHeader />
	</div>
)
export default Reservation;