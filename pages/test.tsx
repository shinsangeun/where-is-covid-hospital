import InfiniteScroll from "react-infinite-scroll-component";
import {useEffect, useState} from "react";
import axios from "axios";

const style = {
    height: 40,
    border: "1px solid green",
    margin: 10,
    padding: 8
};

const test = () => {
    const [pageNum, setPageNum] = useState(1);
    const [data, setData] = useState('');

    const getMovieList = async (pageNum: number) => {
        await axios
            .get(`https://yts.mx/api/v2/list_movies.json?page=${pageNum}`)
            .then((res) => {
                console.log("res==>", res.data.data.movies)
                data === '' ? setData(res.data.data.movies) : setData(data.concat(res.data.data.movies));
            });
    }

    useEffect( () => {
        getMovieList(pageNum);
    }, []);

    const fetchMoreData = () => {
        setPageNum (pageNum +1);
        getMovieList(pageNum+1);
    }

    if(data === '' || data === undefined) return <>loading...</>;

    console.log("Data==>", data);

    return(
        <div>
            <h1>Movie: react-infinite-scroll-component</h1>
            <hr />
            <div id="scrollableDiv" style={{ height: 600, overflow: "auto" }}>
                <InfiniteScroll
                    dataLength={data.length}
                    next={fetchMoreData}
                    hasMore={true}

                    // next={type === "movie" ? fetchMoreData : () => {}}
                    // hasMore={type === "movie"}

                    loader={<h4>Loading...</h4>}
                    scrollableTarget="scrollableDiv"
                >
                    {/*@ts-ignore*/}
                    {data.map((i: any, index: number) => (
                        <div style={style} key={index}>
                            {/*@ts-ignore*/}
                            순서: {index+1} 영화 제목: {data[index].title}
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default test;