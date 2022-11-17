import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import { ReactComponent as DropdownIcon } from 'Icons/downArrow.svg';
import { ReactComponent as CloseIcon } from 'Icons/close.svg';
import OutsideClickHandler from 'react-outside-click-handler';
import ClickOutside from 'Components/ClickOutside/index';

class Dropdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdown: "",
            isDropdownShown: false,
            searchText: "",
            inputValue: props.selectedItem && props.selectedItem[props.displayKey] || ''
        }
    }

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        if (this.state.inputValue !== nextProps.inputValue) {
            this.setState({
                inputValue: nextProps.selectedItem && nextProps.selectedItem[nextProps.displayKey] || ''
            })
        }
    }
    showDropdown = (e) => {
        if (e) {
            e.stopPropagation();
        }

        this.setState({
            isDropdownShown: true
        });
    }

    hideDropdown = () => {
        this.setState({
            isDropdownShown: false
        });
    }

    onSelect = (item, e) => {
        if (e) { e.stopPropagation() }
        this.props.drop(item.label)
        console.log(this.props);
        console.log("click", item);
        this.hideDropdown();
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onClear = (e) => {
        if (e) { e.stopPropagation() }
        this.setState({
            searchText: "",
        })
        const { onSelect, name } = this.props;
        onSelect({}, name);
    }

    onInputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    }

    onInputBlur = () => {
        const { onSelect, name, displayKey, selectedItem } = this.props;
        if ((selectedItem && (selectedItem[displayKey] !== this.state.inputValue)) || !selectedItem) {
            onSelect({
                [displayKey]: this.state.inputValue
            }, name)
        }
    }

    onCLickDrop = (item) => {
        console.log(item);
        this.onSelect(item)
        this.setState({ dropdown: item })
    }



    render() {
        const {
            label,
            items,
            className,
            selectedItem,
            displayKey,
            noBorder,
            searchPlaceholder,
            searchEnabled,
            hasError,
            canClear,
            isZIndexMore,
            isInput,
            isError,
            isPositionChange
        } = this.props;


        return (
            <ClickOutside handleClickOutside={this.hideDropdown}>
                <div className={"pr dropdown-container pr " + className}>
                    <div onClick={this.showDropdown} className={classNames("flex flex-middle flex-between br-5 p-10 theme-border-color bd-none ", {
                        'border-light': !noBorder && !isError,
                        'border-error-color': isError && !noBorder
                    })}>
                        <div className={"flex-1 curP flex flex-middle label-color fSemibold theme-font-color"}>
                            {!isInput ? <Fragment>
                                {/* {selectedItem ? selectedItem[displayKey] : this.state.dropdown} */}
                                {/* {this.state.dropdown ? this.state.dropdown : label} */}
                                {selectedItem ? selectedItem[displayKey] : label}
                            </Fragment> :
                                <input value={this.state.inputValue} className="col-1 fSemibold" onChange={this.onInputChange} onBlur={this.onInputBlur} placeholder={label} />
                            }
                        </div>
                        {items && items.length > 0 && <DropdownIcon className="ht-10" />}

                    </div>
                    {selectedItem && canClear && <CloseIcon className="ht-10 curP pa t-15 r-25" onClick={this.onClear} />}
                    {hasError && !this.state.isDropdownShown && <div className="error-color fs-14 fSemibold op-7 mt-10 ml-5">Please Select The Field</div>}
                    {this.state.isDropdownShown &&
                        <div className={classNames("flex flex-column box-shadow bg-white br-5 col-1 max-ht-300 overflowAuto", {
                            't-100p': !noBorder,
                            't40': noBorder,
                            'z-502': isZIndexMore,
                            'z-1': !isZIndexMore,
                            'ph': isPositionChange,
                            'pa': !isPositionChange
                        })}>
                            {searchEnabled && <div className="mr-15 ml-15 mt-10 mb-5">
                                <input placeholder={searchPlaceholder || "Search Items"}
                                    type="text"
                                    className=" col-1 br-20 ht-40 bg-gray search"
                                    name="searchText"
                                    onChange={this.onChange}
                                />
                            </div>}
                            {
                                items.filter((item) => {
                                    const { searchText } = this.state;
                                    if (!searchText) {
                                        return true;
                                    }
                                    return item[displayKey].toLowerCase().includes(searchText.toLowerCase());
                                }).map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            label={item.label}
                                            className={"flex flex-middle pl-16 fs-16 label-color bg-hover-theme pb-5 pt-8"}
                                            onClick={this.onSelect.bind(this, item)}
                                        >
                                            {item[displayKey]}
                                        </div>
                                    )
                                })
                            }
                        </div>}
                </div>
            </ClickOutside>
        );
    }
}

export default Dropdown;