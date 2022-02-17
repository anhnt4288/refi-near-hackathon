import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from 'components/Navbar/Navbar';
import NavbarContainer from 'components/Navbar/NavbarContainer';
import NavbarWrapper from 'components/Navbar/NavbarWrapper';
import NavbarBrand from 'components/Navbar/NavbarBrand';
import Nav from 'components/Nav/Nav';
import NavLink from 'components/Nav/NavLink';
import Dropdown from 'components/Dropdown/Dropdown';
import DropdownItem from 'components/Dropdown/DropdownItem';
import Button from 'components/Button/Button';
import Heading5 from 'components/Typography/Heading5'
import navBarIcon from '../assets/img/navbar-icon.svg'
import { getBalanceStableCoin } from '../helper/StableCoin'
import { getBalanceFraction } from '../helper/Fractionaliser'
import { getBalanceOwnerNFT } from '../helper/OwnerShipCreator'
import { getBalanceReEUR } from '../helper/Lending'

export default function IndexNavbar(props) {
    const [openNavbar, setOpenNavbar] = useState(false);
    const [balanceStableCoin, setBalanceStableCoin] = useState(0)
    const [balanceFraction, setBalanceFraction] = useState(0)
    const [balanceOwnerNFT, setBalanceOwnerNFT] = useState(0)
    const [balanceReEUR, setBalanceReEUR] = useState(0)

    // Get balance of stable coin, NFT
    async function _getAccountDetail() {
        alert(1)
        let _balanceStableCoin = await getBalanceStableCoin(props.address)
        let _balanceFraction = await getBalanceFraction(props.address)
        let _balanceOwnerNFT = await getBalanceOwnerNFT(props.address)
        let _balanceReEUR = await getBalanceReEUR(props.address)

        setBalanceStableCoin(_balanceStableCoin.toString())
        setBalanceFraction(_balanceFraction.toString())
        setBalanceOwnerNFT(_balanceOwnerNFT.toString())
        setBalanceReEUR(_balanceReEUR.toString())
        console.log(_balanceReEUR)
    }

    return (
        <Navbar color="white" navbar >
            <NavbarContainer>
                <NavbarWrapper>
                    <Link href="/">
                        <a>
                            <NavbarBrand color="gray" >
                                <Heading5 style={{display: "inline-block"}} color="white">
                                    <img src={navBarIcon} style={{display: "inline-block"}}/>   REFI
                                </Heading5>
                            </NavbarBrand>
                        </a>
                    </Link>
                </NavbarWrapper>
                <NavbarWrapper>
                    <Nav>
                        <Button
                            color="green"
                            buttonType="filled"
                            size="regular"
                            rounded={false}
                            block={false}
                            iconOnly={false}
                            ripple="light"
                            onClick={props.handleNetworkSwitch}
                        >
                           <svg viewBox="0 0 135 30" class="h-5">
                                <path d="M96.766 7.471c1.506.385 2.147.74 3.296 1.79 2.012 1.878 2.758 4.614 2.027 7.454-.835 3.283-3.787 5.457-7.306 5.398a18.454 18.454 0 01-1.49-.089c-.731-.118-1.999-.65-2.774-1.168-3.802-2.514-4.31-8.253-1.014-11.477a7.308 7.308 0 013.683-1.982c1.372-.28 2.221-.266 3.578.074zm-31.341 0l1.223.044 1.222.045.045 4.141c.06 6.05-.194 7.395-1.685 8.874-1.088 1.065-2.058 1.435-4.026 1.494-.82.03-1.7-.015-1.968-.074-2.207-.562-3.713-2.278-4.085-4.63-.075-.517-.12-2.928-.105-5.368l.045-4.437h2.386l.074 4.954c.075 4.925.075 4.955.448 5.695 1.133 2.248 4.741 2.262 5.934.03l.402-.77.09-9.998zm-18.37.015l.299.784c.164.414.835 2.16 1.506 3.875.67 1.715 1.401 3.608 1.64 4.215.223.606.79 2.056 1.252 3.21.462 1.153.835 2.144.835 2.188 0 .045-.566.074-1.252.074-1.223 0-1.253-.015-1.402-.4-.09-.236-.984-2.543-1.968-5.146-2.296-6.034-2.281-5.99-2.475-5.99-.09 0-.224.222-.313.488-.09.251-.716 1.908-1.387 3.653-.67 1.745-1.58 4.112-2.013 5.25l-.775 2.071-1.208.045c-1.029.03-1.223 0-1.223-.193 0-.266 5.204-13.666 5.413-13.932.09-.133.611-.192 1.61-.192h1.461zm29.046 0c3.861 0 4.726.133 5.83.932.387.28.85.813 1.118 1.272.388.695.477 1.005.522 2.07.044 1.035 0 1.42-.254 2.115-.402 1.02-1.312 1.908-2.385 2.293-.418.147-.76.295-.76.34 0 .044.879 1.183 1.938 2.544 1.073 1.36 1.938 2.529 1.938 2.617 0 .222-2.117.207-2.58 0-.208-.088-1.237-1.286-2.28-2.662l-1.924-2.484-1.074-.015h-1.088v5.324h-2.386l.03-3.653.045-3.668 3.429-.074c2.475-.059 3.534-.133 3.817-.28 1.088-.548 1.536-2.264.85-3.255-.686-1.02-1.044-1.109-4.25-1.198L73.76 9.63l-.462-.458a1.788 1.788 0 01-.537-1.065l-.09-.621h3.43zm33.34.03c3.548.044 3.801.059 4.502.384 1.58.725 2.43 2.011 2.535 3.816.119 2.277-.85 3.845-2.788 4.481-.314.104-.567.252-.567.326 0 .073.85 1.212 1.879 2.529 1.028 1.316 1.908 2.484 1.953 2.603.12.295-2.475.192-2.863-.119-.149-.118-1.103-1.301-2.132-2.618l-1.849-2.41h-1.014c-.79 0-1.029.059-1.103.236-.045.133-.09 1.331-.09 2.663v2.425h-2.385v-3.46c0-1.909.044-3.565.09-3.698.074-.207.521-.237 3.324-.237 3.623 0 4.13-.118 4.801-1.05.477-.665.477-1.952.015-2.603-.611-.843-1.148-.99-4.205-1.08-2.251-.059-2.847-.118-3.16-.325-.478-.31-.91-1.213-.79-1.612.104-.296.178-.296 3.846-.252zm19.815.044l.85 2.144a400.5 400.5 0 011.327 3.328c.253.65 1.103 2.84 1.878 4.851.79 2.012 1.432 3.727 1.432 3.801 0 .089-.537.148-1.238.148h-1.222l-1.104-2.914c-2.34-6.167-3.28-8.548-3.414-8.592-.134-.045-.462.724-2.028 4.777-.268.74-.954 2.484-1.491 3.89-.537 1.39-.984 2.617-.984 2.691 0 .089-.522.148-1.267.148-.731 0-1.268-.06-1.268-.148 0-.103 3.862-10.101 5.204-13.459l.253-.665h3.072zM94.768 9.556c-3.533 0-5.844 3.299-4.756 6.819.283.931.447 1.198 1.252 1.996.76.755 1.104.976 1.894 1.228a5.17 5.17 0 003.951-.281c2.803-1.36 3.698-4.97 1.924-7.647-.925-1.39-2.386-2.115-4.265-2.115z" fill="currentColor"></path>
                                <path d="M15 2.292a3.317 3.317 0 012.981 1.841l9.375 18.75a3.333 3.333 0 01-2.981 4.825H5.625a3.333 3.333 0 01-2.98-4.825l9.374-18.75A3.317 3.317 0 0115 2.292M15 0a5.625 5.625 0 00-5.031 3.108L.594 21.858A5.625 5.625 0 005.625 30h18.75a5.625 5.625 0 005.03-8.142l-9.374-18.75A5.625 5.625 0 0015 0z" fill="currentColor" class="text-primary"></path>
                            </svg>
                        </Button>
                        <NavLink>
                            {props.address == undefined ? <>
                            <Button
                                color="blueGray"
                                buttonType="filled"
                                size="regular"
                                rounded={false}
                                block={false}
                                iconOnly={false}
                                ripple="dark"
                                onClick={props.connectWallet}
                            >
                                <i class="fas fa-wallet"></i> Connect wallet
                            </Button>
                            </> :
                                <>
                                    {props.isWrongNetwork ? 
                                    <Dropdown
                                        color="blueGray"
                                        placement="bottom-end"
                                        buttonText={props.address.substr(0, 12)}
                                        buttonType="filled"
                                        size="regular"
                                        rounded={false}
                                        block={false}
                                        ripple="light"
                                        onClick={() => alert('hello')}
                                    >
                                        <DropdownItem color="blueGray" ripple="light" onClick={() => alert('hello')}>
                                            <i class="fas fa-coins"></i>  Your assets
                                        </DropdownItem>
                                        <DropdownItem color="blueGray" ripple="light" onClick={props.disconnectWallet}>
                                            <i class="fas fa-sign-out-alt"></i> Log out
                                        </DropdownItem>
                                    </Dropdown>
                                    : <>
                                    <Button
                                        color="red"
                                        buttonType="filled"
                                        size="regular"
                                        rounded={false}
                                        block={false}
                                        iconOnly={false}
                                        ripple="dark"
                                        onClick={props.connectWallet}
                                    >
                                       <i class="fas fa-times"></i> Wrong network
                                    </Button>
                                    </>}
                                </>}
                        </NavLink>
                    </Nav>
                </NavbarWrapper>
            </NavbarContainer>
        </Navbar>
    );
}
