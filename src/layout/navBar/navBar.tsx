import { Button, Drawer, Dropdown, Input, MenuProps, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./navBar.scss";

import brandLogoW from "../../assets/brandAssets/brand-logo-fr-white.svg";
import brandLogoB from "../../assets/brandAssets/brand-logo-fr-black.svg";
import homeIcon from "../../assets/icons/home.svg";
import bookings from "../../assets/icons/fi-rs-notebook.svg";
import chat from "../../assets/icons/fi-rr-comment.svg";
import services from "../../assets/icons/stars.svg";
import menu from "../../assets/icons/fi-rr-menu-burger.svg";

import userIcon from "../../assets/raw/userIconOne.png";
import document from "../../assets/icons/document.svg";
import settings from "../../assets/icons/fi-rs-settings.svg";
import signOut from "../../assets/icons/fi-rs-sign-out.svg";

import Switch from "../../assets/icons/fi-rr-refresh.svg";
import searchIcon from "../../assets/icons/fi-rs-search.svg";

import { CloseOutlined } from "@ant-design/icons";
import UserProfileCard from "./userProfileCard/userProfileCard";
import AdvanceSearch from "../../shared/advanceSearch/advanceSearch";
import AvgModal from "../../shared/avgModal/avgModal";
import { useAppSelector } from "../../redux/store";

const NavBar = ({ activeRole }: any) => {


    const isMobileView = useAppSelector((state) => state.globalSlice.isMobileView);

    const location = useLocation();
    const route: any = location.pathname;
    const routeArray = route.split("/");

    const isServiceProvider = activeRole === "serviceProvider";
    const isServiceSeeker = activeRole === "serviceSeeker";

    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [isDrawerOpen, setisDrawerOpen] = useState(false);

    const [isSwitchModal, setIsSwitchModal] = useState<any>(false);
    const [contentsSwitchModal, setContentsSwitchModal] = useState<any>({});

    // scrollnav
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    // scrollnav

    const [isAdvanceSearch, setIsAdvanceSearch] = useState(false);

    const navigate = useNavigate();

    const items: MenuProps["items"] = [
        {
            key: "1",
            label: <UserProfileCard />,
        },
        {
            key: "2",
            label: (
                <div className="drp-items-nav" style={{ marginTop: "10px" }}>
                    <img src={document} alt="" /> <p>Upload KYC</p>
                </div>
            ),
        },
        {
            key: "3",
            label: (
                <div className="drp-items-nav">
                    <img src={settings} alt="" /> <p>Settings</p>
                </div>
            ),
        },
        {
            key: "3",
            label: (
                <div className="drp-items-nav">
                    <img src={signOut} alt="" /> <p>Sign out</p>
                </div>
            ),
        },
        {
            key: "4",
            label: (
                <div className="drp-items-nav-mul">
                    <p className="fs-12 fw-500">Switch Dashboards</p>
                    <div className="switch-tabs">
                        <div
                            className="tabs-bx-s ss-t"
                            onClick={() => {
                                setIsSwitchModal(true);
                                setContentsSwitchModal({ type: "serviceSeeker", role: "" });
                            }}
                        >
                            Service Seeker
                        </div>
                        <div
                            className="tabs-bx-s sp-t"
                            onClick={() => {
                                setIsSwitchModal(true);
                                setContentsSwitchModal({ type: "serviceProvider", role: "" });
                            }}
                        >
                            Service Provider
                        </div>
                        <div
                            className="tabs-bx-s sc-t"
                            onClick={() => {
                                setIsSwitchModal(true);
                                setContentsSwitchModal({ type: "collaborator", role: "" });
                            }}
                        >
                            Collaborator
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    const respMenuItems = [
        {
            key: "1",
            label: "Upload KYC",
            icon: document,
            link: "./upload-kyc",
        },
        {
            key: "2",
            label: "Settings",
            icon: settings,
            link: "./settings",
        },
        {
            key: "4",
            label: "Settings",
            icon: settings,
            link: "./home",
        },
        {
            key: "5",
            label: "Sign out",
            icon: signOut,
            link: "./home",
        },
    ];


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = prevScrollPos > currentScrollPos;

            setPrevScrollPos(currentScrollPos);
            setVisible(isVisible);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    const navStylesCheckExcept = [
        {
            route: "home",
        },
        {
            route: "services",
        },
        {
            route: "user-profile",
        },
    ];
    const matchingRoute = navStylesCheckExcept.some(
        (item) => item.route === routeArray[1]
    );
    const classToRender = `main-header-wrapper ${matchingRoute ? "" : "main-header-fr-wh"
        } d-flex justify-between align-center anim-low-to-high`;

    const serviceProviderRoutesArray = [
        {
            label: "Home",
            route: "/service-provider",
        },
        {
            label: "My Services",
            route: "/service-provider/my-services",
        },
        {
            label: "Profile",
            route: "/service-provider/profile",
        },
        {
            label: "Bookings",
            route: "/service-provider/bookings",
        },
        {
            label: "Settings",
            route: "/service-provider/settings",
        },
        // 'service-provider', 'service-provider/bookings'
    ];

    return (
        <div className={classToRender} style={{ top: visible ? 0 : "-100px" }}>
            {!isMobileView && (
                <div className="brand-logo">
                    <img src={matchingRoute ? brandLogoW : brandLogoB} alt="" />
                </div>
            )}
            {isServiceSeeker && (
                <>
                    {!isMobileView && (
                        <div className="advance-search">
                            <Input
                                type="search"
                                className="input-adv-search"
                                placeholder="Search in Quiklers..."
                                onClick={() => setIsAdvanceSearch(true)}
                                suffix={<img src={searchIcon} alt="" width={20} height={20} />}
                            />
                        </div>
                    )}
                </>
            )}

            {isServiceProvider && (
                <div className="ser-nav-outset">
                    {!isMobileView && (
                        <>
                            {serviceProviderRoutesArray.map((item: any) => (
                                <div
                                    className={`item-bx ${item.route === route ? "ite-selected" : ""
                                        }`}
                                    onClick={() => navigate("." + item.route)}
                                >
                                    <p>{item.label}</p>
                                    {item.route === route && <div className="nvg"></div>}
                                </div>
                            ))}
                        </>
                    )}
                </div>
            )}

            {isAuthenticated ? (
                <div className="nav-menu d-flex align-items-center">
                    {!isMobileView && (
                        <>
                            {isServiceSeeker && (
                                <>
                                    <Button
                                        className="rounded-buttons-nav"
                                        onClick={() => navigate("./home")}
                                    >
                                        <img src={homeIcon} width={20} height={20} alt="" />
                                    </Button>
                                    <Button
                                        className="rounded-buttons-nav"
                                        onClick={() => navigate("./services")}
                                    >
                                        <img src={services} width={20} height={20} alt="" />
                                    </Button>
                                    <Button
                                        className="rounded-buttons-nav"
                                        onClick={() => navigate("./bookings")}
                                    >
                                        <img src={bookings} width={20} height={20} alt="" />
                                    </Button>
                                </>
                            )}
                            <Button
                                className="rounded-buttons-nav"
                                onClick={() => navigate("./chat")}
                            >
                                <img src={chat} width={20} height={20} alt="" />
                            </Button>
                            <Button
                                className="rounded-buttons-nav"
                                onClick={() => navigate("./chat")}
                            >
                                <img src={chat} width={20} height={20} alt="" />
                            </Button>

                            <div className="user-profile-wrapper">
                                <Dropdown
                                    menu={{ items }}
                                    placement="bottomRight"
                                    arrow
                                    overlayClassName="pro-drp"
                                >
                                    <div className="user-profile">
                                        <div className="user-img-wrapper">
                                            <img src={userIcon} alt="" />
                                        </div>
                                    </div>
                                </Dropdown>
                            </div>
                        </>
                    )}

                    {isMobileView && (
                        <Button
                            className="rounded-buttons-nav"
                            onClick={() => setisDrawerOpen(true)}
                        >
                            <img src={menu} width={20} height={20} alt="" />
                        </Button>
                    )}

                    {isMobileView && (
                        <div className="brand-logo brand-logo-res">
                            <img src={matchingRoute ? brandLogoW : brandLogoB} alt="" />
                        </div>
                    )}

                    {isServiceSeeker ? (
                        <>
                            {isMobileView && (
                                <div
                                    className="advance-search-toggle-icon rounded-buttons-nav"
                                    onClick={() => setIsAdvanceSearch(true)}
                                >
                                    <img src={searchIcon} alt="" width={20} height={20} />
                                </div>
                            )}
                        </>
                    ) : (
                        isMobileView ? 
                        <div className="profile-rounded0"  onClick={() => navigate("./service-provider/profile")}><img src={userIcon} width={32} height={32} alt="" /></div>
                        :
                        <div></div>
                    )}

                    <Drawer
                        title={
                            <div className="d-flex justify-between align-center">
                                <span className="fs-15 fw-600">Menu</span>
                                <span onClick={() => setisDrawerOpen(false)}>
                                    <CloseOutlined />
                                </span>
                            </div>
                        }
                        placement="left"
                        closable={false}
                        onClose={() => setisDrawerOpen(false)}
                        open={isDrawerOpen}
                        key="left"
                    >
                        <UserProfileCard isMobileView={isMobileView} />
                        {respMenuItems.map((item: any) => (
                            <div
                                className="drp-items-nav"
                                onClick={() => {
                                    item.link && navigate(`${item.link}`);
                                }}
                                style={{ marginTop: "10px" }}
                                key={item.key}
                            >
                                <img src={item.icon} alt="" /> <p>{item.label}</p>
                            </div>
                        ))}
                        <div className="nav-dr-switch">
                            <p className="fs-12 fw-500">Switch Dashboards</p>
                            <div className="switch-tabs">
                                <div
                                    className="tabs-bx-s ss-t"
                                    onClick={() => {
                                        setIsSwitchModal(true);
                                        setContentsSwitchModal({ type: "serviceSeeker", role: "" });
                                    }}
                                >
                                    Service Seeker
                                </div>
                                <div
                                    className="tabs-bx-s sp-t"
                                    onClick={() => {
                                        setIsSwitchModal(true);
                                        setContentsSwitchModal({
                                            type: "serviceProvider",
                                            role: "",
                                        });
                                    }}
                                >
                                    Service Provider
                                </div>
                                <div
                                    className="tabs-bx-s sc-t"
                                    onClick={() => {
                                        setIsSwitchModal(true);
                                        setContentsSwitchModal({ type: "collaborator", role: "" });
                                    }}
                                >
                                    Collaborator
                                </div>
                            </div>
                        </div>
                    </Drawer>
                </div>
            ) : (
                <div>
                    <Button className="login-btn" onClick={() => navigate("./sign-in")}>
                        Sign In
                    </Button>
                </div>
            )}

            {isServiceSeeker && (
                <AdvanceSearch
                    isAdvanceSearch={isAdvanceSearch}
                    setIsAdvanceSearch={setIsAdvanceSearch}
                />
            )}

            <AvgModal
                isOpenModal={isSwitchModal}
                setIsOpenModal={setIsSwitchModal}
                contentsSwitchModal={contentsSwitchModal}
                setContentsSwitchModal={setContentsSwitchModal}
                isAvg
                onSubmit={() => alert("Clicked")}
            />
        </div>
    );
};

export default NavBar;
