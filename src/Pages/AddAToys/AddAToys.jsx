/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';


const AddAToys = () => {
    useTitle('AddAToys')
    const [selectedOption, setSelectedOption] = useState(null);
    const { user } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.skills = selectedOption;
        console.log(data)

        fetch("https://baby-doll-server-side.vercel.app/postToy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.insertedId){
                    Swal.fire(
                        'Good job!',
                        'You have data insert successfully!',
                        'success'
                      )
                }
            });
        console.log(data);
    };

    const options = [
        { value: 'frozen dolls', label: 'frozen dolls' },
        { value: 'donald duck', label: 'donald duck' },
        { value: 'science kits', label: 'science kits' },
        { value: 'math learning toys', label: 'math learning toys' },
        { value: 'Bedtime Baby Doll', label: 'Bedtime Baby Doll' },
        { value: 'Cooking Toys', label: 'Cooking Toys' },
    ];


    return (
       <div className='bg-secondary'>
         <Container>
            <Row>
                <Col>
                    <form className='p-5 m-4 shadow-lg text-center ' onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className=" mb-2 w-75"
                            {...register("title")}
                            placeholder="title"
                            defaultValue="Name"
                        />
                        <input
                            className="mb-2 w-75"
                              value={user?.email}
                            {...register("email", { required: true })}
                            placeholder="your email"
                            type="email"
                        />

                        <input
                            className="mb-2 w-75"
                            {...register("image")}
                            placeholder="Image URL"
                            type="url"
                            defaultValue="https://img.freepik.com/free-vector/magic-fairy_1450-101.jpg?w=740&t=st=1684560645~exp=1684561245~hmac=69bf14d366fd094d608bbb9b15d92e512a9462d66df464b28593c6bd8c5a85af"
                        />


                        <CreatableSelect
                            className="mx-auto w-75 my-2 "
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            isMulti
                        />
                        <select className="mb-2 w-25" {...register("available_quantity")}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        <select className="mb-2 w-50" {...register('radioGroup')}>
                            <option value="Rating1">4.6 </option>
                            <option value="Rating2">4.7 </option>
                            <option value="Rating3">4.8 </option>
                            <option value="Rating4">4.9 </option>
                            <option value="Rating5">5</option>
                        </select>
                        <br />
                        <input
                            className="mb-2 w-75"
                            {...register("toyName")}
                            placeholder="Description"
                        />
                        <br />
                        <input className="px-5 " value="Post Toy" type="submit" />
                    </form>
                </Col>
            </Row>
        </Container>
       </div>
    );
};

export default AddAToys;