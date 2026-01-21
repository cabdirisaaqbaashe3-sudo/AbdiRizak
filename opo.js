@media (max-width: 768px) {
    .menu {
        display: none; /* Marka hore waa qarsanaan */
        position: absolute;
        top: 7rem;
        left: 0;
        width: 100%;
        background-color: var(--white);
        flex-direction: column;
        text-align: center;
        box-shadow: 0 5px 10px rgba(0,0,0,0.1);
    }

    .menu.show {
        display: block; /* Marka JS la taabto ayuu soo baxayaa */
    }

    .nav-list {
        flex-direction: column;
        padding: 2rem 0;
    }

    .hamburger {
        display: block; /* Waxay ka soo dhex muuqanaysaa mobaylka */
        font-size: 3rem;
        cursor: pointer;
    }
}
