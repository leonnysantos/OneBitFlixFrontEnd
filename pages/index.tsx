import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss"
import HeaderNoAuth from "@/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/components/homeNoAuth/presentationSection";
import CardsSection from "@/components/homeNoAuth/cardSection";
import SlideSection from "@/components/homeNoAuth/slideSection";
import { GetStaticProps } from "next";
import courseService, { CourseType } from "@/services/courseService";
import { ReactNode } from "react";
import Footer from "@/components/common/footer";

interface IndexPageProps {
  children?: ReactNode,
  course: CourseType[]
}

const HomeNotAuth = function ({ course }: IndexPageProps) {
  return (
    <>
      <Head>
        <title>OneBitFlix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="onebitflix" key="title" />
        <meta
          name="description"
          content="Tenha acesso aos melhores conteúdos de programação de uma forma simples e fácil!"
        />
      </Head>
      <main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <CardsSection />
        <SlideSection newestCourses={course} />
        <Footer />
      </main>
    </>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await courseService.getNewestCourses();

    // Verifica se a resposta é válida
    if (!res || res === undefined || res.course === undefined) {
      return {
        props: {
          course: null, // Use null como valor padrão
        },
        revalidate: 3600 * 24,
      };
    }

    return {
      props: {
        course: res.course,
      },
      revalidate: 3600 * 24,
    };
  } catch (error) {
    console.error('Erro ao obter os cursos mais recentes:', error);
    return {
      // Trate o caso de erro, por exemplo, redirecionando para uma página de erro
      redirect: {
        destination: '/pagina-de-erro',
        permanent: false,
      },
    };
  }
};

export default HomeNotAuth;