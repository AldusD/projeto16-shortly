--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: shorts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.shorts (
    id integer NOT NULL,
    "shortUrl" text NOT NULL,
    url text NOT NULL,
    "userId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: shorts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.shorts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: shorts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.shorts_id_seq OWNED BY public.shorts.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    password text NOT NULL,
    email text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    CONSTRAINT users_email_check CHECK ((char_length(email) > 4))
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: visits; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.visits (
    id integer NOT NULL,
    "shortId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: visits_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.visits_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: visits_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.visits_id_seq OWNED BY public.visits.id;


--
-- Name: shorts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shorts ALTER COLUMN id SET DEFAULT nextval('public.shorts_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: visits id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.visits ALTER COLUMN id SET DEFAULT nextval('public.visits_id_seq'::regclass);


--
-- Data for Name: shorts; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.shorts VALUES (7, 'S6sRKF4s1gAFZn5rfhPoN', 'https://www.youtube.com/watch?v=UALNE6-sjoU', 29, '2022-10-15 11:22:07.483569');
INSERT INTO public.shorts VALUES (8, 'khNSu8Is4My7zkewW7Cjt', 'https://www.youtube.com/watch?v=tMui4IVW0BM', 29, '2022-10-15 11:23:00.888359');
INSERT INTO public.shorts VALUES (9, 'LNBPNk6i4STUtIADhu-1M', 'https://www.youtube.com/watch?v=n4RjJKxsamQ', 29, '2022-10-15 11:24:00.6746');
INSERT INTO public.shorts VALUES (11, 'oBrVfz8Prpt6LS4nkuhfP', 'https://www.youtube.com/watch?v=6hzrDeceEKc', 28, '2022-10-15 11:27:39.390401');
INSERT INTO public.shorts VALUES (12, '0v5NTCXizYP2Gp0NymV8f', 'https://www.youtube.com/watch?v=r8OipmKFDeM', 28, '2022-10-15 11:28:04.553462');
INSERT INTO public.shorts VALUES (13, 'DH6aaSXBNWnXmeVNksVww', 'https://www.youtube.com/watch?v=6QyVil0dwhk', 28, '2022-10-15 11:28:25.571308');
INSERT INTO public.shorts VALUES (14, 'fypp-DP12SCQB5Ufn61sA', 'https://www.nintendo.com/en-us/?L000-11:ch=pdpd', 22, '2022-10-15 11:31:20.19848');
INSERT INTO public.shorts VALUES (15, 'GDFrjDRQC8oZulnILRKhx', 'https://www.nintendo.com/pokemon-scarlet-violet/', 22, '2022-10-15 11:31:38.667721');
INSERT INTO public.shorts VALUES (16, 'sUjf1GmwzRePwf-KoWG_0', 'https://www.nintendo.com/en-us/store/products/luigis-mansion-3-switch/', 24, '2022-10-15 11:33:28.169158');
INSERT INTO public.shorts VALUES (18, 'CbbvyvSigVRKjZcbPXV1h', 'https://en.wikipedia.org/wiki/Banana', 23, '2022-10-15 11:36:44.279662');
INSERT INTO public.shorts VALUES (19, 'A1GUg4_UONPTl2PvH_hNd', 'https://www.youtube.com/watch?v=VihNMR9_Uw8', 26, '2022-10-15 11:39:30.963026');
INSERT INTO public.shorts VALUES (20, 'ynzenSi0OGoIs2O8zezvy', 'https://www.youtube.com/watch?v=WSnwAxMR51o', 25, '2022-10-15 11:40:58.050477');
INSERT INTO public.shorts VALUES (21, '_qPvd9ncgHGNprK-4YN6J', 'https://www.youtube.com/watch?v=IoI7B5vQeuI', 21, '2022-10-15 11:42:41.097894');
INSERT INTO public.shorts VALUES (22, 'pdaoVSUYRdzkktVR0mCed', 'https://www.chess.com/analysis/game/live/59255505861?tab=review', 20, '2022-10-15 11:48:17.115196');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (20, 'Magnus Carlsen', '$2b$10$2Dl8v8CcjSneAtWufU7Nj.qYf0ltmx3j1CCpLUlWOWk03y7mNHHRe', 'wcc@chess.com', '2022-10-15 11:12:07.339359');
INSERT INTO public.users VALUES (21, 'Hans Niemann', '$2b$10$HUlElVQmImcvbvEPgANaSeWlPeGZXAJbSv.i5tt00xG2ua8s8aMua', 'cheat@chess.com', '2022-10-15 11:12:35.388351');
INSERT INTO public.users VALUES (22, 'Mario Bros', '$2b$10$oW/erdO2Xs/jgdpwV3jMseE7bJARmSDYGUsKi/aL2irERuSLruPAi', 'herewego@nintendo.com', '2022-10-15 11:13:14.584834');
INSERT INTO public.users VALUES (23, 'Donkey Kong', '$2b$10$psE66BYkkrYdYyNXvSHaHOsVx8dXUTIXlfR/sP6ho/.41KgQtNpBm', 'guregure@nintendo.com', '2022-10-15 11:13:48.570108');
INSERT INTO public.users VALUES (24, 'Luigi Bros', '$2b$10$j6nXIHu7Yp6cKoZ9rstJ..43zt7yRFOm6FfEa7bTwJwOQcaRnvzqW', 'ghost@nintendo.com', '2022-10-15 11:14:21.951971');
INSERT INTO public.users VALUES (25, 'Luis Paulo Supi', '$2b$10$tt2QTIzQRBDUrZyM01VyieWVYEr9dVrAmkAX9btarmN9em36va/T6', 'train@chess.com', '2022-10-15 11:15:01.295518');
INSERT INTO public.users VALUES (26, 'Hiraku Nakamura', '$2b$10$FRf2enqJdjNg/mkev36bEuBWG20dgzb42Yy.G6ZzJYvQ9D7hZ2w2S', 'stream@chess.com', '2022-10-15 11:15:55.991183');
INSERT INTO public.users VALUES (27, 'Liam Gallagher', '$2b$10$WrdwCNLyrIl5hBnNHW63ruE41lwRoqkTYY02QZMZ8e6CSul.ato5e', 'maybe@oasis.com', '2022-10-15 11:18:01.431486');
INSERT INTO public.users VALUES (28, 'Noel Gallagher', '$2b$10$iTc63mW50hRtDrXSujTSAer1jBtnHmCbqaafi5MoA9UPskAz4MQAW', 'god@oasis.com', '2022-10-15 11:18:15.095674');
INSERT INTO public.users VALUES (29, 'Klaus Meine', '$2b$10$Wa9Z.77usNIph8jaPJvHnuqgr1WMAhn85DF3rYJFfAQ5M05X8s4Lm', 'change@scorpions.com', '2022-10-15 11:18:50.056145');
INSERT INTO public.users VALUES (30, 'Cat Stevenson', '$2b$10$CWECF4MwEidnKXRS.Igy/.3X4W8Qp1.BRNkwbl5xVMJgxXNYm1Cmi', 'butihavetogo@away.com', '2022-10-17 11:38:53.525456');


--
-- Data for Name: visits; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.visits VALUES (14, 22, '2022-10-15 11:50:32.4942');
INSERT INTO public.visits VALUES (15, 22, '2022-10-15 11:50:41.728245');
INSERT INTO public.visits VALUES (16, 22, '2022-10-15 11:50:52.385471');
INSERT INTO public.visits VALUES (17, 7, '2022-10-15 11:55:38.902304');
INSERT INTO public.visits VALUES (18, 8, '2022-10-15 11:56:14.745028');
INSERT INTO public.visits VALUES (19, 9, '2022-10-15 11:56:48.724282');
INSERT INTO public.visits VALUES (20, 9, '2022-10-15 11:57:17.398964');
INSERT INTO public.visits VALUES (24, 22, '2022-10-17 11:21:41.305263');
INSERT INTO public.visits VALUES (25, 22, '2022-10-17 11:21:44.376896');
INSERT INTO public.visits VALUES (26, 22, '2022-10-17 11:21:45.808082');
INSERT INTO public.visits VALUES (27, 22, '2022-10-17 11:33:53.629513');
INSERT INTO public.visits VALUES (28, 22, '2022-10-17 11:33:54.969625');


--
-- Name: shorts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.shorts_id_seq', 22, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 30, true);


--
-- Name: visits_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.visits_id_seq', 28, true);


--
-- Name: users const_unique; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT const_unique UNIQUE (email);


--
-- Name: shorts shorts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shorts
    ADD CONSTRAINT shorts_pkey PRIMARY KEY (id);


--
-- Name: shorts shorts_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shorts
    ADD CONSTRAINT "shorts_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: visits visits_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.visits
    ADD CONSTRAINT visits_pkey PRIMARY KEY (id);


--
-- Name: shorts shorts_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shorts
    ADD CONSTRAINT "shorts_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: visits visits_shortId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.visits
    ADD CONSTRAINT "visits_shortId_fkey" FOREIGN KEY ("shortId") REFERENCES public.shorts(id);


--
-- PostgreSQL database dump complete
--

