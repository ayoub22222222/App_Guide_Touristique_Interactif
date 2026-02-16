import React from "react";
import HeroSection from "../components/layout/HeroSection";
import Navbar from "../components/layout/Navbar";
import ProductSection from "../components/layout/ProductSection";
import ProductCard from "../components/common/ProductCard";
import InspirationSection from "../components/layout/InspirationSection";
import RecomandationCard from "../components/layout/RecomandationCard";
import TestoSection from "../components/layout/TestoSection";
import CustomerPicture from "../components/common/CustomerPicture";
import FooterSection from "../components/layout/FooterSection";
import BtnHome from "../components/common/BtnHome";

export default function HomePage() {
    return (
        <>
        <HeroSection>
            <Navbar />
        </HeroSection>
        <ProductSection>
            
            <ProductCard>
                <BtnHome />
            </ProductCard>
            <ProductCard>
                <BtnHome />
            </ProductCard>
            <ProductCard>
                <BtnHome />
            </ProductCard>
            <ProductCard>
                <BtnHome />
            </ProductCard>
            <ProductCard>
                <BtnHome />
            </ProductCard>
            <ProductCard>
                <BtnHome />
            </ProductCard>
            <ProductCard>
                <BtnHome />
            </ProductCard>
            <ProductCard>
                <BtnHome />
            </ProductCard>
            <ProductCard>
                <BtnHome />
            </ProductCard>
            <ProductCard>
                <BtnHome />
            </ProductCard>
            <ProductCard>
                <BtnHome />
            </ProductCard>
            <ProductCard>
                <BtnHome />
            </ProductCard>
        </ProductSection>
        <InspirationSection>
            <RecomandationCard />
            <RecomandationCard />
            <RecomandationCard />
        </InspirationSection>
        <TestoSection>
             <CustomerPicture className="translate-y-20"/>
             <CustomerPicture className="-translate-y-4" />
             <CustomerPicture className="translate-y-32" />
             <CustomerPicture className="-translate-y-18" />
             <CustomerPicture className="translate-y-40 translate-x-5" />
        </TestoSection>
        <FooterSection />
        </>
    )
}