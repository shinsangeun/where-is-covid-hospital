// @ts-ignore
import styled from "styled-components";
import Link from "next/link";

const Layout = styled.div`
    width: 200px;background-color: #eee;z-Index: 10;display: inline-block;position:relative;top: -330px;
`;

const MenuList = styled.div`
    font-size: 17px;text-align:center;padding: 5px 10px;cursor: pointer;
    &.active {font-weight: bold;}
`;

const List = [
    {name: "홈", link : "/"},
    {name: "지도", link: "/map"},
    {name: "지역별 조회", link: "/search"},
    {name: "현황", link: "/detail"}
]

const Menu = () => {
    return(
        <Layout>
            {List.map((key, index) => (
                <MenuList>
                    <Link href={List[index].link}>{List[index].name}</Link>
                </MenuList>
            ))}
        </Layout>
    )
}

export default Menu;