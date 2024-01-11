import React, { useState } from "react";
import { useAuth } from "../../hooks/AuthContext";
import AddPetForm from "./AddPetForm";
import PetList from "./PetList";
import AppointmentForm from "./AppointmentForm";

const Dashboardtwo = ({ onProfileClick }) => {
  const { logout } = useAuth();

  const [activeContent, setActiveContent] = useState("overview");

  const renderOverview = () => {
    return (
      <div>
        <PetList />
      </div>
    );
  };

  const renderAddpet = () => {
    return (
      <div>
        <AddPetForm />
      </div>
    );
  };

  const renderBook = () => {
    return (
      <div>
        <AppointmentForm />
      </div>
    );
  };
  const renderContent = () => {
    switch (activeContent) {
      case "overview":
        return renderOverview();
      case "addpet":
        return renderAddpet();
      case "book":
        return renderBook();

      default:
        return <div>Welcome to the Dashboard</div>;
    }
  };

  return (
    <div class="bg-slate-200 flex h-screen">
      <aside class="fixed z-50 md:relative">
        <label
          class="peer-checked:rounded-full peer-checked:p-2 peer-checked:right-6 peer-checked:bg-gray-600 peer-checked:text-white absolute top-8 z-20 mx-4 cursor-pointer md:hidden"
          for="sidebar-open"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          aria-label="Sidebar Navigation"
          class="peer-checked:w-64 left-0 z-10 flex h-screen w-0 flex-col overflow-hidden bg-primary text-white transition-all md:h-screen md:w-64 lg:w-72"
        >
          <div class="bg-success mt-5 py-1 px-16 md:mt-10">
            <span class="">
              <span class="">
                <img
                  src=".\src\assets\barkNBath.png"
                  className="h-28 w-38"
                  alt="barknbath Logo"
                />
              </span>
            </span>
          </div>
          <ul class="mt-8 space-y-3 md:mt-20">
            <li class="relative">
              <button class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </span>
                <span onClick={() => setActiveContent("overview")}>
                  Overview
                </span>
              </button>
            </li>
            <li class="relative">
              <button class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 font-semibold focus:outline-none">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>{" "}
                </span>
                <span onClick={() => setActiveContent("addpet")}>
                  Add your puffy friend
                </span>
              </button>
              <svg
                class="text-slate-200 absolute -right-1 -top-1/2 z-10 hidden h-32 w-8 md:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="399.349 57.696 100.163 402.081"
                width="1em"
                height="4em"
              >
                <path
                  fill="currentColor"
                  d="M 499.289 57.696 C 499.289 171.989 399.349 196.304 399.349 257.333 C 399.349 322.485 499.512 354.485 499.512 458.767 C 499.512 483.155 499.289 57.696 499.289 57.696 Z"
                />
              </svg>
            </li>
            <li class="relative">
              <button class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </span>
                <span onClick={() => setActiveContent("book")}>
                  Book an appointment
                </span>
              </button>
            </li>

            <li class="relative">
              <button class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <span class="">
                  <span onClick={onProfileClick}>Your account</span>
                </span>
              </button>
            </li>
          </ul>

          <div class="my-6 mt-auto ml-10 flex cursor-pointer">
            <p class="font-thin italic">Dashboard</p>
          </div>
        </nav>
      </aside>

      <div class="flex h-full w-full flex-col">
        <header class="relative flex flex-col items-center bg-white px-4 py-4 shadow sm:flex-row md:h-20">
          <div class="flex w-full flex-col justify-between overflow-hidden transition-all sm:max-h-full sm:flex-row sm:items-center">
            <div class="relative ml-10 flex items-center justify-between rounded-md sm:ml-auto"></div>

            <ul class="mx-auto mt-4 flex space-x-6 sm:mx-5 sm:mt-0">
              <button
                onClick={logout}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200 dark:text-black dark:hover:bg-gray-800"
              >
                Logout
              </button>
              <li class="">
                <button class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </header>

        <div class="h-full overflow-hidden pl-10">
          <main
            id="dashboard-main"
            class="h-[calc(100vh-10rem)] overflow-auto px-4 py-10"
          >
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboardtwo;
