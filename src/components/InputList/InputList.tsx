import React, { FC, FormEvent, useState } from "react";
import "./InputList.css";
import Input from "../../ui-kit/Input/Input";
import mapPin from "../../images/map-pin.svg";
import calendar from "../../images/calendar.svg";
import moon from "../../images/moon.svg";
import user from "../../images/user.svg";
import Button from "../../ui-kit/Button/Button";

const InputList: FC = () => {
   const [city, setCity] = useState<string>('')
   const [guests, setGuests] = useState<string>('')
   const [period, setPeriod] = useState(new Date())



   function handleSubmit(e : FormEvent<HTMLFormElement>) {
      e.preventDefault();
      console.log(city)
      console.log(period)
      console.log(guests)

   }


   const handleChangeCity = (e:React.ChangeEvent<HTMLInputElement>) => {
      setCity(e.target.value)
   }

   const handleChangeGuests = (e:React.ChangeEvent<HTMLInputElement>) => {
      setGuests(e.target.value)
   }

   // const handleChangeDate = (e:React.ChangeEvent<HTMLInputElement>) => {
   //    setPeriod(e.)
   // }

   return (
      <form className="InputList" onSubmit={handleSubmit}>
         <Input img={mapPin} label="Departure city" value={city} isDate={false} onChange={handleChangeCity}/>
         <Input
            img={calendar}
            label="Departure period"
            //value={period}
            isDate={true}
            //onChange={handleChangeDate}
            
         />
         <Input img={moon} label="Number of nights" value="6 — 8" isDate={true}/>
         <Input img={user} label="Number of guests" value={guests} isDate={false} onChange={handleChangeGuests}/>
         <div className="button__container">
            <Button design="primary" name="form" type="submit" >
               Search
            </Button>
         </div>
      </form>
   );
};

export default InputList;
