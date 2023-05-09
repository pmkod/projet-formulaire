import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import dayjs from "dayjs";

const prisma = new PrismaClient();

export const storeCourse = (req: Request, res: Response) => {
  res.render("pages/courses/create");
};

export const createCourse = async (req: Request, res: Response) => {
  const teachers = await prisma.enseignant.findMany();
  const classes = await prisma.classe.findMany();
  const ues = await prisma.ue.findMany();

  res.render("pages/courses/create", { teachers, classes, ues, dayjs });
};

export const getCourses = async (req: Request, res: Response) => {
  const courses = await prisma.enseigne.findMany({
    select: {
      enseignant: true,
      classe: true,
      dateCours: true,
      dateDebutCours: true,
      dateFinCours: true,
      dateDeCreation: true,
      ue: true,
      volumeCours: true,
    },
  });
  console.log(courses);
  res.render("pages/courses/index", { courses });
};
