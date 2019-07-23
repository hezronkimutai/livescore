import React from "react";
import logo from "../static/soccer.png";
import tennis from "../static/tennis.png";
import basketball from "../static/basketball.svg";
import Header from "./Header"

function Layout() {
  const categories = [
    "Soccer",
    "Rugbi",
    "Basket Ball",
    "Hockey",
    "Tennis",
    "Advertise",
    "Contact",
    "Settings"
  ];
  const cate = categories.map(number => (
    <div class="w-1/6 text-orange p-2" style={{color:"#f6993f"}}>{number}</div>
  ));
  const dates = [
    "Arrow",
    "2nd May",
    "3rd May",
    "Today",
    "5th May",
    "6th May",
    "Arrow"
  ];
  const date = dates.map(number => (
    <div class="w-1/5 bg-orange mr-1 text-sm  h-8 p-1 rounded text-white" style={{backgroundColor:"#f6993f"}}>
      <center>{number}</center>
    </div>
  ));
  const sidebar = ["Live", "Kenya", "England","Live", "Kenya", "England","Live", "Kenya", "England", "England","Live", "Kenya", "England","Live", "Kenya", "England"];
  const sdbr = sidebar.map(sd => (
    <div class="w-full p-2 rounded bg-orange border-black my-2" style={{backgroundImage:"linear-gradient(to left ,#1a202c, #f6993f,#1a202c)", textAlign:"center"}}>{sd}</div>
  ));
  const leagues = [
    {
      league: "Epl",
      teams: [
        { homeTeam: "Watford", awayTeam: "ManCity" },
        { homeTeam: "Chelsea", awayTeam: "Arsenal" }
      ]
    },
    {
      league: "Laliga",
      teams: [
        { homeTeam: "Barcelona", awayTeam: "RealMadrid" },
        { homeTeam: "Atleico Madrid", awayTeam: "Sevila" }
      ]
    },
    {
      league: "Bundesliga",
      teams: [
        { homeTeam: "Bayern Munich", awayTeam: "Bayern Leverkusen" },
        { homeTeam: "Wolves", awayTeam: "RealMadrid" }
      ]
    },
    {
      league: "Serea A",
      teams: [
        { homeTeam: "Barcelona", awayTeam: "RealMadrid" },
        { homeTeam: "Barcelona", awayTeam: "RealMadrid" }
      ]
    },
    {
      league: "Serea A",
      teams: [
        { homeTeam: "Barcelona", awayTeam: "RealMadrid" },
        { homeTeam: "Barcelona", awayTeam: "RealMadrid" }
      ]
    },
    {
      league: "Serea A",
      teams: [
        { homeTeam: "Barcelona", awayTeam: "RealMadrid" },
        { homeTeam: "Barcelona", awayTeam: "RealMadrid" }
      ]
    },
    {
      league: "Serea A",
      teams: [
        { homeTeam: "Barcelona", awayTeam: "RealMadrid" },
        { homeTeam: "Barcelona", awayTeam: "RealMadrid" }
      ]
    },
    {
      league: "Serea A",
      teams: [
        { homeTeam: "Barcelona", awayTeam: "RealMadrid" },
        { homeTeam: "Barcelona", awayTeam: "RealMadrid" }
      ]
    },
    {
      league: "Serea A",
      teams: [
        { homeTeam: "Barcelona", awayTeam: "RealMadrid" },
        { homeTeam: "Barcelona", awayTeam: "RealMadrid" }
      ]
    },
    {
      league: "Serea A",
      teams: [
        { homeTeam: "Barcelona", awayTeam: "RealMadrid" },
        { homeTeam: "Barcelona", awayTeam: "RealMadrid" }
      ]
    },
    {
      league: "Serea A",
      teams: [
        { homeTeam: "Barcelona", awayTeam: "RealMadrid" },
        { homeTeam: "Barcelona", awayTeam: "RealMadrid" }
      ]
    },
    {
      league: "Serea A",
      teams: [
        { homeTeam: "Barcelona", awayTeam: "RealMadrid" },
        { homeTeam: "Barcelona", awayTeam: "RealMadrid" }
      ]
    },
    {
      league: "Serea A",
      teams: [
        { homeTeam: "Barcelona", awayTeam: "RealMadrid" },
        { homeTeam: "Barcelona", awayTeam: "RealMadrid" }
      ]
    },

  ];
  const lgs = leagues.map(ls => <div class="">{ls}</div>);
  const league = leagues.map(lg => (
    <div class=" w-full m-1 p-1">
      <center className="text-white bg-orange" style={{backgroundColor:"#f6993f"}}>{lg.league}</center>

      {lg.teams.map(tms => (
        <div class=" flex mb-1" style={{ border: "solid 1px white" }}>
          <div class="w-1/5 mx-2 text-sm  h-8 p-2  text-white">
            <center>Status</center>
          </div>
          <div class="w-1/5  mx-2 text-sm  h-8 p-2  text-white">
            <center>{tms.homeTeam}</center>
          </div>
          <div class="w-1/5  mx-2 text-sm  h-8 p-2  text-white">
            <center>1 - 2</center>
          </div>
          <div class="w-1/5  mx-2 text-sm  h-8 p-2 text-white">
            <center>{tms.awayTeam}</center>
          </div>
          <div class="w-1/5 mx-2 text-sm  h-8 p-2 text-white">
            <center>Star</center>
          </div>
          </div>
      ))}


    </div>
  ));
  return (
    <div class="absolute   w-full h-auto" style={{backgroundColor:"#1a202c"}}>
  <Header/>
      <div className="pt-6">
        <div class="w-full  mt-6 p-6 h-6  fixed flex" style={{zIndex:"1", backgroundColor:"#1a202c"}}>{cate}</div>
        <div class="flex h-auto w-full flex-wrap " style={{ minHeight: "75%"}}>
          <div
            class="p-4 pt-6 text-white rounded-l-lg my-2"
            style={{ width: "15%" }}
          >
            <div className="px-2 fixed mt-16" style={{ width:"15%", overflowY:"scroll", height:"65%"}}>
              {sdbr}
            </div>
          </div>
          <div class="w-full p-8 mt-16" style={{ width: "60%" }}>
            <div class=" w-full  h-6 px-1 flex mx-1 my-2">{date}</div>

            {league}
          </div>
          <div
            class="p-4 w-full sm:w-full md:w-full lg:w-1/5 xl:w-1/5 text-white rounded-r-lg my-2"
            style={{ width: "25%", overflowY:"scroll", height:"65%" }}
          >
            <div className="px-2 fixed mt-16" style={{ width:"23%"}}>
              <div class="w-full pr-8 rounded  border-black my-2" style={{backgroundImage:"linear-gradient(to left ,#1a202c, #f6993f,#1a202c)", textAlign:"center"}}>
                Advert
              </div>
                <div class="w-full pr-8 rounded  border-black my-2" style={{backgroundImage:"linear-gradient(to left ,#1a202c, #f6993f,#1a202c)", textAlign:"center"}}>
                Advert
              </div>
              <div class="w-full pr-8 rounded  border-black my-2" style={{backgroundImage:"linear-gradient(to left ,#1a202c, #f6993f,#1a202c)", textAlign:"center"}}>
                Advert
              </div>
              <div class="w-full pr-8 rounded  border-black my-2" style={{backgroundImage:"linear-gradient(to left ,#1a202c, #f6993f,#1a202c)", textAlign:"center"}}>
                Advert
              </div>
                <div class="w-full pr-8 rounded  border-black my-2" style={{backgroundImage:"linear-gradient(to left ,#1a202c, #f6993f,#1a202c)", textAlign:"center"}}>
                Advert
              </div>


            </div>
          </div>
        </div>
        <div
          class=" flex h-16 w-full rounded-b-lg text-white"
          style={{ backgroundImage: "linear-gradient(#de751f, #1a202c)" }}
        >
          <div class="w-full">
            <center>footer</center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
