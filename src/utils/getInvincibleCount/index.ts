export const getInvincibleCount = (TimesBeenRepeated: number, repeatTimesMayBeLost: number) => {
    return (TimesBeenRepeated > repeatTimesMayBeLost)? (TimesBeenRepeated - repeatTimesMayBeLost) : 0;
}