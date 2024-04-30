export const generalStyles = {
    container: "container my-0 mx-auto",
    flexCenter: "flex items-center justify-center",
    flexCenterBetween: "flex items-center justify-between",
    inlineFlexCenter: "inline-flex items-center justify-center", 
}

export const headerStyles = {
    headerFixed: ``,
    headerScrolled: ``,
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
