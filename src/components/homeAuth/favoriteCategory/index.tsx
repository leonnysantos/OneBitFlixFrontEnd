import SlideComponent from "@/components/common/slideComponent";
import styles from "../../../../styles/slideCategory.module.scss";
import useSWR from "swr";
import courseService from "@/services/courseService";

const FavoritesCourses = function () {
    const { data, error } = useSWR("/favorites", courseService.getFavCourses);

    if (error) return error
    if (!data) return <><p>Loading...</p></>

    return <>
        <p className={styles.titleCategory}>Minha Lista</p>
        {data.data.courses.length >= 1 ? (
            <SlideComponent course={data.data.courses} />
        ) : (
            <p className="h5 text-center pt-3">
                <strong>Você não tem nenhum curso na lista</strong>
            </p>
        )}
    </>;
};

export default FavoritesCourses;