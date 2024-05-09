export const generalStyles = {
    container: "container mx-auto px-[15px] sm:px-[0]",
    flexCenter: "flex items-center justify-center",
    flexCenterBetween: "flex items-center justify-between",
    inlineFlexCenter: "inline-flex items-center justify-center", 
}

export const navMenuStyles = {
    navMenuClose : 'hidden md:block',
    navMenuOpen : 'absolute opacity-100 top-[130%] sm:right-[8%] right-[4%] w-[230px] scale-x-1 bg-secondary-background-color animation-menuToggleOpen',
    navMenuOpenList : `${generalStyles.flexCenter} text-sm flex-col w-full py-[15px] gap-[10px] rounded-md shadow-menu transition-all`,
    navMenuCloseList : `${generalStyles.flexCenter} text-sm gap-[15px] transition-all`,
}

export const modalStyles = {
    modalOpen : 'opacity-100 scale-100',
    modalClose : 'opacity-0 scale-0',
}

export const sectionStyle = "py-[50px] flex justify-center";
export const sectionTitle = "section-title";
export const otherSection = "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full pt-[60px] text-center text-lg text-light-color font-black";