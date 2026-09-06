import { GetStaticProps } from "next";
import Head from "next/head";
import React, { FC } from "react";
import { BoxArticle } from "@/app/components/BoxArticle";
import { BoxMain } from "@/app/components/BoxMain";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Separator } from "@/app/components/ui/separator";
import { NakazaPage } from "@/app/types/nakazaPage";
import { ProjectPage } from "@/app/types/projectPage";
import { SiteConfig } from "@/app/types/sitePage";
import { readMdFile } from "@/app/utils/readMdFile";

type Props = {
  nakazaPage: NakazaPage;
  projectPage: ProjectPage;
  site: SiteConfig;
};

const Nakaza: FC<Props> = (props) => {
  return (
    <BoxMain>
      <Head>
        <title>{`${props.nakazaPage.title} | ${props.site.title}`}</title>
        <meta content={props.site.description} name={"description"} />
      </Head>
      <BoxArticle>
        <div className={"flex w-full flex-col gap-4 md:gap-8 xl:flex-row"}>
          <div className={"flex min-w-0 flex-1 flex-col gap-4 md:gap-8"}>
            <Card>
              <CardHeader>
                <CardDescription>教授</CardDescription>
                <CardTitle>
                  <h1>{props.nakazaPage.name}</h1>
                </CardTitle>
                <CardDescription>{props.nakazaPage.name_en}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{props.nakazaPage.email}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h2>略歴</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-4">
                  {props.nakazaPage.histories.map((history, index) => (
                    <li key={index} className="flex flex-col gap-2">
                      {index > 0 && <Separator />}
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-semibold">{history.year}</p>
                        <p>{history.text}</p>
                      </div>
                      <p className="text-muted-foreground">{history.text_en}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className={"flex min-w-0 flex-1 flex-col gap-4 md:gap-8"}>
            <Card>
              <CardContent className="flex flex-col gap-4">
                <p className="whitespace-pre-wrap">{props.nakazaPage.description.trim()}</p>
                <Separator />
                <p className="whitespace-pre-wrap">{props.nakazaPage.description_en.trim()}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h2>研究・プロジェクト</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-4">
                  {props.projectPage.projects.map((history, index) => (
                    <li key={index} className="flex flex-col gap-4">
                      {index > 0 && <Separator />}
                      <p>{history.title}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </BoxArticle>
    </BoxMain>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const unsoetedNakazaPage = await readMdFile<NakazaPage>("pages", "nakaza");

  const histories = [...unsoetedNakazaPage.histories];

  histories.reverse();

  const nakazaPage = { ...unsoetedNakazaPage, histories };

  const projectPage = await readMdFile<ProjectPage>("pages", "project");

  const site = await readMdFile<SiteConfig>("configs", "site");

  return { props: { nakazaPage, projectPage, site } };
};

export default Nakaza;
