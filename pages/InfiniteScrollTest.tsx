import InfiniteScroll from "react-infinite-scroll-component";
import {useState} from "react";

const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
};

const InfiniteScrollTest = () => {
    const [data, setData] = useState(Array.from({ length: 20 }));

    const fetchMoreData = () => {
        setTimeout(() => {
            setData(data.concat(Array.from({ length: 20 })));
        }, 1500);
    };

    return(
        <div>
            <h1>react-infinite-scroll-component</h1>
            <hr />
            <div id="scrollableDiv" style={{ height: 300, overflow: "auto" }}>
                <InfiniteScroll
                    dataLength={data.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    scrollableTarget="scrollableDiv"
                >
                    {data.map((i, index) => (
                        <div style={style} key={index}>
                            div - #{index}
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default InfiniteScrollTest;