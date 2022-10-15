import { nanoid } from "nanoid";

import * as repository from '../repositories/urls.repository.js';
import STATUS from "../enums/status.js";

const createShorten = async (req, res, next) => {
    const { userId } = res.locals.user;
    const url = res.locals.url;
    const shortUrl = nanoid(); // generates random code that is going to be used as shortUrl

    // insert shorten on db
    try {
        const shorten = await repository.insertShorten(shortUrl, url, userId);
        return res.status(STATUS.CREATED).send({ shortUrl });
    } catch (error) {
        console.log(error);
        return res.sendStatus(STATUS.SERVER_ERROR);
    }
}

const getShortenById = async(req, res) => {
    const shortenId = req.params.id;

    try {
        const shorten = await repository.selectShortenById(shortenId);
        if(shorten.rowCount === 0) return res.sendStatus(STATUS.NOT_FOUND);

        const { id, shortUrl, url} = shorten.rows[0];
        return res.status(STATUS.OK).send({ id, shortUrl, url});

    } catch (error) {
        console.log(error);
        return res.sendStatus(STATUS.SERVER_ERROR);
    }
}

const openShorten = async (req, res) => {
    const { shortUrl } = req.params;

    try {
        // get shorten
        const shorten = await repository.selectShortenByShort(shortUrl);
        if(shorten.rowCount === 0) return res.sendStatus(STATUS.NOT_FOUND);
        
        // adds new visit and redirects with status code 302; 
        const { id, url } = shorten.rows[0];
        const visit = await repository.insertVisit(id);

        res.redirect(url);
    } catch (error) {
        console.log(error);
        res.sendStatus(STATUS.SERVER_ERROR);
    }
}


export { createShorten, getShortenById, openShorten };