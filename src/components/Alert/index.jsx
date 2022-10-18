import React, { Fragment } from 'react';
import Overlay from 'Components/Overlay';
const Alert = ({ text, onCancel }) => (
	<Fragment>
		<Overlay>
			<div className="bg-white box-shadow ph-20 pv-20 br-5">
				<div className="mb-10 tCenter header-medium-color fSemibold fs-18">
					{text}
				</div>
				<div className="col-1 ht-60 flex flex-middle flex-center bg-white">
					<button className="ht-40 br-20 theme-color border-theme fs-16 fBold pl-30 pr-30" onClick={onCancel}>Ok</button>
				</div>
			</div>
		</Overlay>
	</Fragment>
);

export default Alert;