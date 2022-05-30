import React, { useState } from 'react';
// import './Inpjs.css'
import { } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
// import $ from 'jquery';
// Function Start ................................................................!
function InpJS() {
    // 1. Client Name
    const [client, setClient] = useState("");

    // 2. Client Name.......................................................................
    var d = new Date();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const [project, setProject] = useState("");

    // 3. Completed Task ...................................................................
    const [inputList, setInputList] = useState([{ fname: '' }])
    const handeInputChange = (e, ind) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[ind][name] = value;
        setInputList(list);
    }
    const handelAddClick = () => {
        inputList == "" ? alert("Plz Enter Valide Data") : setInputList([...inputList, { fname: '' }])
    }

    const handeRemove = (index) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }

    // 4. In-Progress Task ............................................................
    const [task2, setTask2] = useState([{ fname: '' }])
    const handeInputChange2 = (e, ind) => {
        const { name, value } = e.target;
        const list = [...task2];
        list[ind][name] = value;
        setTask2(list);
    }
    const handelAddClick2 = () => {
        !task2 ? alert("Plz Enter Valide Data") : setTask2([...task2, { fname: '' }])
    }
    const handeRemove2 = (index) => {
        const list = [...task2];
        list.splice(index, 1);
        setTask2(list);
    }

    // 5. Remaining Task ....................................................................
    const [task3, setTask3] = useState([{ fname: '' }])
    const handeInputChange3 = (e, ind) => {
        const { name, value } = e.target;
        const list = [...task3];
        list[ind][name] = value;
        setTask3(list);
    }
    const handelAddClick3 = () => {
        !task3 ? alert("Plz Enter Valide Data") : setTask3([...task3, { fname: '' }])
    }

    const handeRemove3 = (index) => {
        const list = [...task3];
        list.splice(index, 1);
        setTask3(list);
    }

    // 6. Queries Task ...........................................................................
    const [task4, setTask4] = useState([{ fname: '' }])
    const handeInputChange4 = (e, ind) => {
        const { name, value } = e.target;
        const list = [...task4];
        list[ind][name] = value;
        setTask4(list);
    }
    const handelAddClick4 = () => {
        !task4 ? alert("Plz Enter Valide Data") : setTask4([...task4, { fname: '' }])
    }

    const handeRemove4 = (index) => {
        const list = [...task4];
        list.splice(index, 1);
        setTask4(list);
    }
    // 7. Notes Task ........................................................................................
    const [task5, setTask5] = useState([{ fname: '' }])
    const handeInputChange5 = (e, ind) => {
        const { name, value } = e.target;
        const list = [...task5];
        list[ind][name] = value;
        setTask5(list);
    }
    const handelAddClick5 = () => {
        !task5 ? alert("Plz Enter Valide Data") : setTask5([...task5, { fname: '' }])
    }
    const handeRemove5 = (index) => {
        const list = [...task5];
        list.splice(index, 1);
        setTask5(list);
    }

    // 8. Thanks Msg TL Name Print .....................................................................
    const [tl, setTl] = useState("");

    console.log('inputList :>> ', inputList);
    return (
        <>
            <div className='container mt-5 pb-3'>
                <div className="row">
                    <h1>I'm here to write your daily update.</h1>
                    <div className='col-12 col-lg-5'>

                        {/* 1.************ client Data ************ */}
                        <div className='mt-2'>
                            <label className='clintName'> Client Name :</label><br />
                            <input type="text" className="InputBox" id='msg' placeholder='Enter Client Name'
                                required onChange={(e) => setClient(e.target.value)} />
                        </div>

                        {/* 2. ************ client Data ************ */}
                        <div className='mt-2'>
                            <label className='clintName'> Project Name :</label><br />
                            <input type="text" className="InputBox" placeholder='Enter Project Name'
                                required onChange={e => setProject(e.target.value)} />
                        </div>

                        {/* 3. ************ Completed Task ************ */}
                        <div id='iCon3'>
                            <div>
                                <label className='clintName'> List of Completed Tasks :</label>
                            </div>
                            <FaPlusCircle className='iconfa iCon3' onClick={handelAddClick} />
                            {
                                inputList.map((item, index) => {
                                    return (
                                        <>
                                            <div>
                                                <input type="text" name="fname" className='InputBoxs' placeholder='Enter Name' required
                                                    onChange={(e) => handeInputChange(e, index)} />
                                                {inputList.length !== 1 && < FaMinusCircle className='remove' onClick={() => handeRemove(index)} />}
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>

                        {/* 4. ************ Completed Task ************ */}
                        <div>
                            <div>
                                <label className='clintName'>List of In-Progress Tasks :</label>
                            </div>
                            {
                                task2.map((item, index) => {
                                    return (
                                        <>
                                            <div>
                                                <input type="text" name="fname" className='InputBoxs' placeholder='Enter Name' required
                                                    onChange={(e) => handeInputChange2(e, index)} />
                                                {task2.length !== 1 && < FaMinusCircle className='remove' onClick={() => handeRemove2(index)} />}

                                            </div>
                                        </>
                                    )
                                })
                            }
                            <FaPlusCircle className='iconfa' onClick={handelAddClick2} />
                        </div>

                        {/* 5. ************ Remaining Task ************ */}
                        <div>
                            <div>
                                <label className='clintName'> List of Remaining Tasks :</label>
                            </div>
                            {
                                task3.map((item, index) => {
                                    return (
                                        <>
                                            <div>
                                                <input type="text" name="fname" className='InputBoxs' placeholder='Enter Name' required
                                                    onChange={(e) => handeInputChange3(e, index)} />
                                                {task3.length !== 1 && < FaMinusCircle className='remove' onClick={() => handeRemove3(index)} />}

                                            </div>
                                        </>
                                    )
                                })
                            }
                            <FaPlusCircle className='iconfa' onClick={handelAddClick3} />
                        </div>

                        {/* 6. ************ Queries Task ************ */}
                        <div>
                            <div>
                                <label className='clintName'> Queries :</label>
                            </div>
                            {
                                task4.map((item, index) => {
                                    return (
                                        <>
                                            <div>
                                                <input type="text" name="fname" className='InputBoxs' placeholder='Enter Name' required
                                                    onChange={(e) => handeInputChange4(e, index)} />
                                                {task4.length !== 1 && < FaMinusCircle className='remove' onClick={() => handeRemove4(index)} />}

                                            </div>
                                        </>
                                    )
                                })
                            }
                            <FaPlusCircle className='iconfa' onClick={handelAddClick4} />
                        </div>

                        {/* 7. ************ Notes Task ************ */}
                        <div>
                            <div>
                                <label className='clintName'> Notes :</label>
                            </div>
                            {
                                task5.map((item, index) => {
                                    return (
                                        <>
                                            <div>
                                                <input type="text" name="fname" className='InputBoxs' placeholder='Enter Name' required
                                                    onChange={(e) => handeInputChange5(e, index)} />
                                                {task5.length !== 1 && < FaMinusCircle className='remove' onClick={() => handeRemove5(index)} />}
                                            </div>
                                        </>
                                    )
                                })
                            }
                            <FaPlusCircle className='iconfa' onClick={handelAddClick5} />
                        </div>

                        {/* 8. Thansk Msg */}
                        <div className='mt-2'>
                            <label className='clintName'> TL Name :</label><br />
                            <input type="text" className="InputBox" placeholder='TL Name' required onKeyUp={e => setTl(e.target.value)} />
                        </div>
                    </div>

                    {/* ==================================================== Print Data ============================================================ */}
                    <div className='col-12 col-lg-7 '>
                        <div className='secondDiv mt-4'>

                            {project != "" ? <p>Updates for {project} as on {`${d.getDate()}th ${months[d.getMonth()]}, ${d.getFullYear()}`}<hr className='bg-secondery' /></p> : " "}

                            {/* 1. Client Name.................................... */}
                            {client != "" ? <p>Hi  {client},</p> : ""}


                            {/* 2. Project Name */}
                            {project != "" ? <p>Following are the updates for {project} as on {`${d.getDate()}th ${months[d.getMonth()]}, ${d.getFullYear()}`}</p> : "  "}

                            {/* 3. -=-=-=-=-=-=-= Completed Task -=-=-=-=-=-=-=  */}
                            {
                                inputList.length && inputList.some((i) => i.fname !== "") ? <div className='compTask'> <span className=''><u><b>List of Completed Tasks :</b></u></span>
                                    <ol type='1'>
                                        {inputList.map((item) => {
                                            return item.fname != "" ? <li className='liCTask'>{item.fname}<b>[Done]</b></li> : ""
                                        })} </ol> </div> : " "
                            }

                            {/* 4. -=-=-=-=-=-=-= In-Progress Task -=-=-=-=-=-=-=  */}
                            {
                                task2.length && task2.some((i) => i.fname != "") ? <div className='compTask'> <span className=''><u><b>List of In-Progress Tasks :</b></u></span>
                                    <ol type='1'>
                                        {task2.map((item) => {
                                            return item.fname != "" ? <li className='liCTask'>{item.fname}</li> : ""
                                        })} </ol> </div> : " "
                            }

                            {/* 5. -=-=-=-=-=-=-= Remaninig Task  -=-=-=-=-=-=-= */}
                            {
                                task3.length && task3.some((i) => i.fname != "") ? <div className='compTask'>  <span className=''><u><b>List of Remaning Tasks :</b></u></span>
                                    <ol type='1'>
                                        {task3.map((item) => {
                                            return item.fname != "" ? <li className='liCTask'>{item.fname}</li> : ""
                                        })} </ol> </div> : " "
                            }

                            {/* 6. -=-=-=-=-=-=-= Queries Task  -=-=-=-=-=-=-= */}
                            {
                                task4 && task4.some(i => i.fname != "") ? <div className='compTask'> <span className=''><u><b>List of Queries Tasks :</b></u></span>
                                    <ol type='1'>
                                        {task4.map((item) => {
                                            return item.fname != "" ? <li className='liCTask'>{item.fname}</li> : ""
                                        })} </ol> </div> : " "
                            }

                            {/* 7. -=-=-=-=-=-=-= Notes Task -=-=-=-=-=-=-=  */}
                            {
                                task5 && task5.some(i => i.fname != "") ? <div className='compTask'> <span className=''><u><b>List of Notes Tasks :</b></u></span>
                                    <ol type='1'>
                                        {task5.map((item) => {
                                            return item.fname != "" ?
                                                <li className='liCTask'>{item.fname}</li> : ""
                                        })} </ol> </div> : " "
                            }
                            {inputList.length && inputList.some((i) => i.fname !== "") ? <p>Please check with the latest updates and let us know your thoughts for the same.</p> : ""}

                            {/* 8. Thanks Msg...................... */}
                            <div> {tl != "" ? <p>Thanks,<br />{tl}</p> : ""} </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
} export default InpJS;