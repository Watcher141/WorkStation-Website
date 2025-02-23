import React from "react";
import Accordian from "./Accordian";

const Faquestions = () => {
  return (
    // <div className="grid md:grid-cols-2 gap-x-10 md:gap-y-5 gap-y-3 mx-5 lg:mx-0">
    <>
      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0">
        <Accordian
          question={"What is WorkStation?"}
          answer={
            "WorkStation is a platform that provides a wide range services according to client needs and boost your bussniess and reach."
          }
        />
        </div>

        <div className="md:w-1/2">
        <Accordian
          question={"Whwere is WorkStation located?"}
          answer={
            "Its located in West Bengal India."
          }
        />
        </div>
      </div>

      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0">
        <Accordian
          question={"Top 60 NodeJS Interview Questions and Answers"}
          answer={
            "A list of top NodeJS interview questions and answers for both freshers & experienced candidates to prepare and boost chances of selection."
          }
        />
        </div>

        <div className="md:w-1/2">
        <Accordian
          question={"Top 49 Data Structures Interview Questions 2024"}
          answer={
            "Data structures have become integral to every field and business. They are the building blocks of any computer program, making organising..."
          }
        />
        </div>
      </div>

      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0 ">
        <Accordian
          question={"Top 55 Flutter Interview Questions and Answers 2024"}
          answer={
            "Flutter has been gaining immense popularity in recent times, and for a good reason. It is a powerful open-source mobile app development framework created by Google."
          }
        />
        </div>

        <div className="md:w-1/2">
        <Accordian
          question={"Top 28 Java 8 Interview Questions and Answers 2024"}
          answer={
            "Java is a widely used programming language for various types of development projects, from the web and Android apps to the Internet of Things (IoT). "
          }
        />
        </div>
      </div>
    </>
  );
};

export default Faquestions;
