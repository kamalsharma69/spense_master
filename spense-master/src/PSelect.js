import Select, { components } from 'react-select'
import {AiOutlineMinusCircle, AiFillPlusCircle} from 'react-icons/ai'

import { useState } from 'react';
// user can select passenger type and number of passengers 
// add Done button to close the menu
function PSelect(props) {
    const { Option,MenuList } = components;
    const [state, setState] = useState({
        room:0,
        adult:0,
        children:0
    })
    const MList = (props) => (
        <MenuList {...props}>
            <div className='flex flex-col'>
                {props.children}
                <button className='bg-gray-600 text-white p-2 rounded-lg mx-2 my-2' onClick={props.selectProps.menuIsOpen}>Done</button>    
            </div>
        </MenuList>
    );
                            
    const IconOption = (props) => (
        <Option {...props}> 
            <div className='flex flex-row items-center justify-around'>
                <div>
                <h3 className='text-gray-600 font-semibold'>{props.label}</h3>
                <p className='text-sm text-gray-400'>Max Capacity is 8guest/room</p>
                </div>
                <div className='flex flex-row items-center'>
                    <AiOutlineMinusCircle 
                    onClick={
                        () => {
                            if(state[props.value] > 0){
                                setState({
                                    ...state,
                                    [props.value]: state[props.value] - 1
                                })
                            }
                        }
                    }
                    className='text-gray-600 mx-2' />
                    <p className='text-gray-600'>{state[props.value]}</p>
                    <AiFillPlusCircle onClick={
                        () => {
                            setState({
                                ...state,
                                [props.value]: state[props.value] + 1
                            })
                        }
                    } className='text-gray-600 mx-2' />
                </div>
                
            </div>

        </Option>
    );
    const placeholder = <p className='font-bold'>
        {state.adult} Adult &middot; {state.children} Children &middot; {state.room} Room
    </p>

    return ( 
        <Select
            components={{ Option: IconOption, MenuList: MList}}
            styles=
            {
                {
                    menuList: (provided, state) => ({...provided, "maxHeight": "200px"}),
                }
            }
            placeholder={placeholder}
            value={null}
            isSearchable={false}
            closeMenuOnSelect={false}
            {...props}
         /> 
    );
}

export default PSelect;