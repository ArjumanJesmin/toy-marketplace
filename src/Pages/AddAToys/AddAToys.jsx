/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Col, Container, FormLabel, Image, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';
import toy from '../../assets/toy.jpg'


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
                if (result.insertedId) {
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
        <div className='rounded  m-5'>
            <Container>
                <Row>
                        <Col>

                            <h2 className='text-center text-secondary'>Add A Toy</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <FormLabel htmlFor="name">Name*</FormLabel>
                                    <br />
                                    <input
                                        className=" mb-4 w-100 rounded py-2 "
                                        {...register("title")}
                                        placeholder="title"
                                        defaultValue="Name: "
                                    />
                                </div>

                                <div>
                                    <FormLabel htmlFor="email">Email*</FormLabel>
                                    <br />
                                    <input
                                        className="mb-4 w-100 rounded py-2"
                                        value={user?.email}
                                        {...register("email", { required: true })}
                                        placeholder="your email"
                                        type="email"
                                    />
                                </div>

                                <div>
                                    <FormLabel htmlFor="Image URL">Image URL*</FormLabel>
                                    <br />
                                    <input
                                        className="mb-4 w-100 rounded py-2"
                                        {...register("image")}
                                        placeholder="Image URL"
                                        type="url"
                                        defaultValue=""
                                    />
                                </div>


                                <CreatableSelect
                                    className=" mb-4 w-100 rounded py-2 "
                                    defaultValue={selectedOption}
                                    onChange={setSelectedOption}
                                    options={options}
                                    isMulti
                                />
                                <select className="mb-4  rounded py-2 w-50" {...register("available_quantity")}>
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
                                <select className="mb-4  rounded py-2 w-50" {...register('radioGroup')}>
                                    <option value="Rating1">4.6 </option>
                                    <option value="Rating2">4.7 </option>
                                    <option value="Rating3">4.8 </option>
                                    <option value="Rating4">4.9 </option>
                                    <option value="Rating5">5</option>
                                </select>
                                <br />
                                <input
                                    className="mb-4 w-100 rounded py-2"
                                    {...register("toyName")}
                                    placeholder="Description"
                                />
                                <br />
                                <input className="px-5 rounded btn btn-outline-secondary  " value="Post Toy" type="submit" />
                            </form>
                        </Col>

                        <Col>
                            <Image className='h-75 w-100' src={toy} thumbnail />
                        </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddAToys;