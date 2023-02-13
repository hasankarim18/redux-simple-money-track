import React from "react";
import AddDeposite from "./bankComponents/AddDeposite";
import AddWithdraw from "./bankComponents/AddWithdraw";
import Balance from "./bankComponents/Balance";
import Deposite from "./bankComponents/Deposite";
import Withdraw from "./bankComponents/Withdraw";
import Footer from "./Footer";
import Header from "./Header";

const Bank = () => {
  return (
    <div>
    <Header />
      <main className="mt-8 md:container md:mx-auto">
        <section className="grid sm:grid-cols-3 grid-cols-1 text-white gap-4">
            <Deposite />
            <Withdraw />
            <Balance />   
        </section>

        <section className="mt-8 grid sm:grid-cols-2 gap-4">
          <AddDeposite />
          <AddWithdraw />
        </section>
      </main>
     <Footer />
    </div>
  );
};

export default Bank;
