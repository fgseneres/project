import React from 'react';

	// const count = [];
	// const basedate = new Date();
	// const countdate = new Date();
	// countdate.setDate(countdate.getDate() + 12);
	// while(basedate <= countdate) {
	// 	const x = basedate.toLocaleDateString();
	// 	const y = x.split('/').slice(0,2).join('/');
	// 	count.push(<td key={y} className="table-bordered">{y}</td>);
	// 	basedate.setDate(basedate.getDate() + 1);
	// }

	var dt = 0;
	var count = [];

	while(dt<10) {
		var startdate = new Date();
		startdate.setDate(startdate.getDate() + dt);
		var xx = startdate.toLocaleDateString();
		count.push(<td>{xx}</td>);
		dt++;
	}

	
	var rcount = [];
	var bb = [];

	var room = 1;
	while(room<26){
		rcount.push(<tr key={room}><td>{room}</td>{bb}<td></td></tr>);
			var aa = 0;

			while(aa<10) {
				bb.push(<td key={aa}>{room}</td>);
				aa++;
			}
		room++;
	}

const PageHeader = () => (
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
						{rcount}
					</tbody>
				</table>
			</div>
)
const Reservation = ({ match }) => (
	<div className="col-lg-12 col-md-12">
		<PageHeader />
	</div>
)
export default Reservation;