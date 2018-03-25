import React from 'react'
export default () => (
    <form className="forum">

        <label>Please Enter Your Full Name</label>
        <input type="text" placeholder="Name" name="name"></input>

        <label>Please Enter Your Age</label>
        <input type="Age" placeholder="Age" name="Age"></input>

        <label>Please Enter Your Gender</label>
        <input type="Gender" placeholder="Gender" name="Gender"></input>

        <label>Are you a Graduate?</label>
        <input type="graduate" placeholder="Graduate? Y:N" name="graduate"></input>

        <label>Do you have an apprenticeship?</label>
        <input type="apprentice" placeholder="Apprenticeship? Y:N" name="apprentice"></input>

        <label>Are you a smoker?</label>
        <input type="smoker" placeholder="Smoker? Y:N" name="smoker"></input>

        <label>Please Enter Your Employment Status</label>
        <input type="Status" placeholder="Emplyment Status" name="Status"></input>

        <label>Please Enter Your Parents/Guardians address</label>
        <input type="ParentsAdress" placeholder="Parent Guardian Address" name="ParentsAdress"></input>

        <label>Please Enter Your Email</label>
        <input type="email" placeholder="Email" name="email"></input>

        <label>Please Enter Your Tel</label>
        <input type="telephone" placeholder="telephone" name="telephone"></input>

        <label>Chose A Strong Password</label>
        <input type="password" placeholder="Password" name="password"></input>

    </form>

)