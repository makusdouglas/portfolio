// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Project = {
  title: string;
  description: string;
  image: string;
  linkToRepo: string;
};

const projects: Project[] = [
  {
    title: "Primeiro Protifolio",
    description: "Primeiro projeto de portifolio utilizando somente HTML e CSS",
    image: "",
    linkToRepo: "",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project[]>
) {
  res.status(200).json(projects);
}
