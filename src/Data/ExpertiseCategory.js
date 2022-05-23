//Web-BackEnd
import flask from "../images/ExpertiseCategory/flask.webp";
import django from "../images/ExpertiseCategory/django-logo.webp";
import fastapi from "../images/ExpertiseCategory/FastAPI.webp";
import node from "../images/ExpertiseCategory/node_js.webp";

//Web-FrontEnd
import html from "../images/ExpertiseCategory/html.svg";
import css from "../images/ExpertiseCategory/css.svg";
import js from "../images/ExpertiseCategory/js.svg";
import angular from "../images/ExpertiseCategory/angular.webp";
import react from "../images/ExpertiseCategory/react.webp";
import vuejs from "../images/ExpertiseCategory/vuejs-logo.svg";
import nextjs from "../images/ExpertiseCategory/nextjs.webp";
import bootstrap from "../images/ExpertiseCategory/bootstrap.webp";
import flutter from "../images/ExpertiseCategory/flutter-logo.svg";
import ionic from "../images/ExpertiseCategory/ionic-logo.webp";

//Desktop
import python from "../images/ExpertiseCategory/Python_logo.webp";
import net from "../images/ExpertiseCategory/Microsoft.webp";
import cplus from "../images/ExpertiseCategory/c++.webp";

//Database/Data Storage
import sqlserver from "../images/ExpertiseCategory/sqlserver.webp";
import mysql from "../images/ExpertiseCategory/mysql.webp";
import oracle from "../images/ExpertiseCategory/oracle-logo.webp";
import postgresql from "../images/ExpertiseCategory/postgresql-logo.webp";
import mongodb from "../images/ExpertiseCategory/MongoDB_Logo.webp";

//DevOps-Containerization
import docker from "../images/ExpertiseCategory/Docker_logo.webp";
import mesos from "../images/ExpertiseCategory/mesos.svg";
import openshift from "../images/ExpertiseCategory/openshift.svg";

//DevOps-Automation
import selinium from "../images/ExpertiseCategory/selenium.svg";
import ansible from "../images/ExpertiseCategory/ansible.svg";
import puppet from "../images/ExpertiseCategory/puppet (2).svg";

//CI/CD
import cicd from "../images/ExpertiseCategory/cicd.svg";
import azure from "../images/ExpertiseCategory/azure-devops-logo-vertical.svg";
import awsdev from "../images/ExpertiseCategory/aws-developer-tools (1).svg";
import googledev from "../images/ExpertiseCategory/google-developer-tools (1).svg";

//Clouds
import googlecloud from "../images/ExpertiseCategory/google-cloud-logo.svg";
import digitalOcean from "../images/ExpertiseCategory/digital-ocean.svg";
import aws from "../images/ExpertiseCategory/aws .svg";

export const Categories = [
  {
    id: 1,
    title: "Web",
    subtitle1: "Back End",
    subtitle2: "Front End",
    subtitle3: "",

    category: "Web",
    front_end: [html, css, js, angular, react, vuejs, nextjs, bootstrap],
    back_end: [flask, django, fastapi, node],
    others: [],
  },
  {
    id: 2,
    title: "Mobile",
    subtitle1: "",
    subtitle2: "",
    subtitle3: "",

    category: "Mobile",
    front_end: [react, flutter, ionic],
    back_end: [],
    others: [],
  },
  {
    id: 3,
    title: "Desktop",
    subtitle1: "",
    subtitle2: "",
    subtitle3: "",

    category: "Desktop",
    front_end: [net, python, flutter, cplus],
    back_end: [],
    others: [],
  },
  {
    id: 4,
    title: "Databases/Data Storage",
    subtitle1: "",
    subtitle2: "",
    subtitle3: "",

    category: "Database",
    front_end: [sqlserver, mysql, oracle, postgresql, mongodb],
    back_end: [],
    others: [],
  },
  {
    id: 5,
    title: "DevOps",
    subtitle2: "CONTAINERIZATION",
    subtitle1: "AUTOMATION",
    subtitle3: "CI/CD",
    category: "DevOps",
    front_end: [docker, mesos, openshift],
    back_end: [selinium, ansible, puppet],
    others: [azure, cicd, awsdev, googledev],
  },
  {
    id: 6,
    title: "Clouds",
    subtitle1: "",
    subtitle2: "",
    subtitle3: "",

    category: "Clouds",
    front_end: [googlecloud, digitalOcean, aws],
    back_end: [],
    others: [],
  },
  // {
  //   id: 2,
  //   title: "Mobile",
  //   category: "Mobile",
  //   image: [Circle, wordpress, desktop, digital, hosting],
  // },
  // {
  //   id: 3,
  //   title: "Desktop",
  //   category: "Desktop",
  //   image: [Circle, wordpress, desktop, digital, hosting],
  // },
];
