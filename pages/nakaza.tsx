import { GetStaticProps } from "next";
import Head from "next/head";
import React, { FC } from "react";
import { BoxArticle } from "@/app/components/BoxArticle";
import { BoxMain } from "@/app/components/BoxMain";
import { Card } from "@/app/components/ui/card";
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
        <div className={"flex w-full flex-col gap-4 md:gap-6 xl:flex-row"}>
          <div className={"flex min-w-0 flex-1 flex-col gap-4 md:gap-6"}>
            <Card className={"flex flex-col gap-2 rounded-lg text-base p-4"}>
              <p className={"opacity-80"}>{"教授"}</p>
              <div className={"flex flex-col"}>
                <div className={"flex flex-wrap items-center gap-2"}>
                  <h1 className={"text-2xl font-bold"}>{props.nakazaPage.name}</h1>
                  <p className={"pl-4 text-sm"}>{props.nakazaPage.name_en}</p>
                </div>
              </div>
              <p>{props.nakazaPage.email}</p>
            </Card>
            <Card className={"flex flex-col gap-2 rounded-lg text-base p-4"}>
              <h2 className={"text-lg font-bold"}>{"略歴"}</h2>
              <ul className={"flex flex-col"}>
                {props.nakazaPage.histories.map((history, index) => (
                  <li key={index} className={"flex flex-col py-2"}>
                    {index > 0 && <Separator className={"mb-2 bg-border"} />}
                    <div className={"flex flex-wrap items-center gap-2"}>
                      <p className={"text-2xl font-bold"}>{history.year}</p>
                      <p className={"ml-2"}>{history.text}</p>
                    </div>
                    <p className={"pt-2"}>{history.text_en}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <div className={"flex min-w-0 flex-1 flex-col gap-4 md:gap-6"}>
            <Card className={"flex flex-col rounded-lg text-base p-4"}>
              <p className={"whitespace-pre-wrap pb-4"}>{props.nakazaPage.description.trim()}</p>
              <Separator className={"bg-border"} />
              <p className={"whitespace-pre-wrap pt-4"}>{props.nakazaPage.description_en.trim()}</p>
            </Card>
            <Card className={"flex flex-col gap-4 rounded-lg text-base p-4"}>
              <h2 className={"text-lg font-bold"}>{"研究・プロジェクト"}</h2>
              <ul className={"flex flex-col"}>
                {props.projectPage.projects.map((history, index) => (
                  <li key={index} className={"flex flex-col"}>
                    {index > 0 && <Separator className={"my-2 bg-border"} />}
                    <p className={"py-2 text-left"}>{history.title}</p>
                  </li>
                ))}
              </ul>
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
