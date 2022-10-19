import React, { Fragment } from 'react';
import uuid from 'uuid';
import { isAdaniWilmar } from 'Utils/';
const Checkbox = ({ label, id, checked, onCheck, className, type, isBids }) => (
    <Fragment>
        {type !== 'square' && <div onClick={onCheck} className={"checkbox flex flex-middle curP " + className} id={id || uuid()}>
            <div className="outer-circle">
                {
                    checked && <div className="inner-circle pa" />
                }
            </div>
            <div className="label ml-5 table-text-color fs-16">{label}</div>
        </div>}
        {isBids && isAdaniWilmar() ?
            <div>
                {type === 'square' && <div onClick={onCheck} className={"flex flex-middle curP " + className} id={id || uuid()}>
                    <div className="pr ht-16 wt-16 bg-checkbox box-shadow br-5 border-black-light">
                        {
                            checked && <div className="pa ml-2 ht-10 wt-10 center bg-theme br-2" />
                        }
                    </div>
                    <div className="label ml-5 table-text-color fs-16">{label}</div>
                </div>}
            </div>
            :
            <div>
                {type === 'square' && <div onClick={onCheck} className={"flex flex-middle curP " + className} id={id || uuid()}>
                    <div className="pr ht-16 wt-16 bg-white box-shadow br-5 border-black-light">
                        {
                            checked && <div className="pa ml-2 ht-10 wt-10 center bg-theme br-2" />
                        }
                    </div>
                    <div className="label ml-5 table-text-color fs-16">{label}</div>
                </div>}
            </div>
        }
    </Fragment>
);

export default Checkbox;