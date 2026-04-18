function UAC({username, children}) {
    return(
        <>
        <h2>Hi {username}</h2>
        <div>{children}</div>
        </>
    )
}
export default UAC