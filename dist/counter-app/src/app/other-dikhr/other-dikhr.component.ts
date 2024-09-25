import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-other-dikhr',
  templateUrl: './other-dikhr.component.html',
  styleUrls: ['./other-dikhr.component.css']
})
export class OtherDikhrComponent {

// ayathulkursi = false;
// quls = false;
// Istighfar = false;
// goodHealth = false;
// goodDay = false;
// anxiety = false;
// blessDay = false;
// evening = false;
// morEve = false;
// suffice = false;
//   toggle1(){
//     this.ayathulkursi = !this.ayathulkursi;
//   }

//   toggle2(){
//     this.quls = !this.quls;
//   }

//   toggle3(){
//     this.Istighfar = !this.Istighfar;
//   }

//   toggle4(){
//     this.goodHealth = !this.goodHealth;
//   }

//   toggle5(){
//     this.goodDay = !this.goodDay;
//   }
//   toggle6(){
//     this.anxiety = !this.anxiety;
//   }
//   toggle7(){
//     this.blessDay = !this.blessDay;
//   }
//   toggle8(){
//     this.evening = !this.evening;
//   }
//   toggle9(){
//     this.morEve = !this.morEve;
//   }
//   toggle10(){
//     this.suffice = !this.suffice
//   }



   daily:any[] = [
    {
      id: 1,
      topic: `Ayat al-Kursi`,
      content1: `ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌۭ وَلَا نَوْمٌۭ ۚ لَّهُۥ مَا
            فِى ٱلسَّمَـٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ
            مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍۢ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ
            وَسِعَ كُرْسِيُّهُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ`,
      content2: `Allāhu lā ilāha illā Huwa-l-Ḥayyu-l-Qayyūm, lā ta’khudhuhū sinatuw-wa lā nawm, lahū mā fi-s-samāwāti wa mā
            fi-l-arḍ, man dhā’lladhī yashfaʿu ʿindahū illā bi-idhnih, yaʿlamu mā bayna aydīhim wa mā khalfahum, wa lā
            yuḥīṭūna bi-shay’im-min ʿilmihī illā bi-mā shā’, wasiʿa kursiyyuhu-s-samāwāti wa-l-arḍ, wa lā ya’ūduhū
            ḥifẓuhumā wa Huwa-l-ʿAlliyu-l-ʿAẓīm.`,

      content3:`Meaning : Allah, there is no god but He, the Ever Living, the One Who sustains and protects all that exists.
            Neither drowsiness overtakes Him nor sleep. To Him Alone belongs whatever is in the heavens and whatever is
            on the earth. Who is it that can intercede with Him except with His permission? He knows what is before them
            and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His
            Kursī extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High,
            the Most Great. (2:255)`

    },
    {
      id: 2,
      topic: `Al-Iklas`,
      content1: `(3x)  قُلْ هُوَ اللهُ أَحَدٌ ، اَللهُ الصَّمَدُ ، لَمْ يَلِدْ وَلَمْ يُوْلَدْ ، وَلَمْ يَكُنْ لَّهُ كُفُوًا أَحَدٌ`,
      content2: `Qul Huwa-llāhu Aḥad. Allāhu-ṣ-Ṣamad. Lam yalid wa lam yūlad. Wa lam yakul-lahū kufuwan aḥad.`,
      content3:`Meaning : Say, He is Allah, the One, the Self-Sufficient Master, Who has not given birth and was not born,
            and to Whom no one is equal.`

    },
    {
      id: 3,
      topic: `Al-Falaq`,
      content1: ` (3x)  قُلْ أَعُوْذُ بِرَبِّ الْفَلَقِ ، مِنْ شَرِّ مَا خَلَقَ ، وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ، وَمِنْ شَرِّ
            النَّفَّاثَاتِ فِي الْعُقَدِ ، وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ`,
      content2: `Qul aʿūdhu bi-Rabbi-l-falaq. Min sharri mā khalaq. Wa min sharri ghāsiqin idhā waqab. Wa min
            sharri-n-naffāthāti fi-l-ʿuqad. Wa min sharri ḥāsidin idhā ḥasad`,

      content3:`Meaning : Say, I seek protection of the Lord of the daybreak, from the evil of what He has created, and from
            the evil of the darkening night when it settles, and from the evil of the blowers in knots, and from the
            evil of the envier when he envies. (113)`

    },
    {
      id: 4,
      topic: `An-Nas`,
      content1: `(3x) قُلْ أَعُوْذُ بِرَبِّ النَّاسِ ، مَلِكِ النَّاسِ ، إِلٰهِ النَّاسِ ، مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ،
            اَلَّذِيْ يُوَسْوِسُ فِيْ صُدُوْرِ النَّاسِ مِنَ الْجِنَّةِ وَالنَّاسِ`,
      content2: `Qul aʿūdhu bi-Rabbi-n-nās. Maliki-n-nās. Ilāh-hin-nās. Min sharri-l-waswāsi-l-khannās. Al-ladhī yuwaswisu fī
            ṣudūri-n-nās. Mina-l-jinnati wa-n-nās.`,

      content3:`Meaning : Say, I seek protection of the Lord of mankind, the King of mankind, the God of mankind, from the
            evil of the whisperer who withdraws, who whispers in the hearts of mankind, whether they be Jinn or people.
            (114)`

    },
    {
      id: 5,
      topic: `Sayyid al-Istighfar`,
      content1: `اَللّٰهُمَّ أَنْتَ رَبِّيْ لَا إِلٰهَ إِلَّا أَنْتَ ، خَلَقْتَنِيْ وَأَنَا عَبْدُكَ ، وَأَنَا عَلَىٰ
            عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ ، أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ ، أَبُوْءُ لَكَ بِنِعْمَتِكَ
            عَلَيَّ وَأَبُوْءُ بِذَنْبِيْ ، فَاغْفِرْ لِيْ فَإِنَّهُ لَا يَغْفِرُ الذُّنُوْبَ إِلَّا أَنْتَ`,
      content2: ` Allāhumma Anta Rabbī, lā ilāha illā Ant, khalaqtanī wa ana ʿabduk, wa ana ʿalā ʿahdika wa waʿdika
            mā’staṭaʿt, aʿūdhu bika min sharri mā ṣanaʿt, abū’u laka bi niʿmatika ʿalayya wa abū’u laka bidhambī
            fa-ghfir lī fa-innahū lā yaghfiru-dh-dhunūba illā Ant.`,

      content3:` Meaning : O Allah, You are my Lord. There is no god except You. You have created me, and I am Your slave,
            and I am under Your covenant and pledge (to fulfil it) to the best of my ability. I seek Your protection
            from the evil that I have done. I acknowledge the favors that You have bestowed upon me, and I admit my
            sins. Forgive me, for none forgives sins but You.`

    },
    {
      id: 6,
      topic: `For good health and protection`,
      content1: `اَللّٰهُمَّ عَافِنِيْ فِيْ بَدَنِيْ ، اَللّٰهُمَّ عَافِنِيْ فِيْ سَمْعِيْ ، اَللّٰهُمَّ عَافِنِيْ فِيْ
            بَصَرِيْ ، لَا إِلٰهَ إِلَّا أَنْتَ ، اَللّٰهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ،
            وأَعُوْذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلٰهَ إِلَّا أَنْت`,
      content2: `Allāhumma ʿāfinī fī badanī, Allāhumma ʿāfinī fī samʿī, Allāhumma ʿāfinī fī baṣarī, lā ilāha illā Ant,
            Allāhumma innī aʿūdhu bika mina-l-kufri wa-l-faqr, wa aʿūdhu bika min ʿadhābi-l-qabr, lā ilāha illā Ant.`,

      content3:` Meaning : O Allah, grant me well-being in my body. O Allah, grant me well-being in my hearing. O Allah,
            grant me
            well-being in my sight. There is no god but You. O Allah, I seek Your protection from disbelief and poverty
            and I seek Your protection from the punishment of the grave. There is no god but You.`

    },
    {
      id: 7,
      topic: `For good day`,
      content1: `>أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلهِ وَالْحَمْدُ لِلهِ ، لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ
            لَهُ
            ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيْرٌ ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِيْ
            هٰذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ ، وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا فِيْ هٰذَا الْيَوْمِ وَشَرِّ مَا
            بَعْدَهُ ، رَبِّ أَعُوْذُ بِكَ مِنَ الْكَسَلِ وَسُوْءِ الْكِبَرِ ، رَبِّ أَعُوْذُ بِكَ مِنْ عَذَابٍ فِي
            النَّارِ وَعَذَابٍ فِي الْقَبْرِ`,
      content2: ` Aṣbaḥnā wa aṣbaḥa-l-mulku li-llāh, wa-l-ḥamdu li-llāh, lā ilāha illa-llāhu waḥdahū lā sharīka lah,
            lahu-l-mulku wa lahu-l-ḥamd, wa huwa ʿalā kulli shay’in Qadīr, Rabbi as’aluka khayra mā fī hādha-l-yawmi wa
            khayra mā baʿdah, wa aʿūdhu bika min sharri mā fī hādha-l-yawmi wa sharri mā baʿdah. Rabbi aʿūdhu bika
            mina-l-kasali wa sū’i-l-kibar, Rabbi aʿūdhu bika min ʿadhābin fi-n-nāri wa ʿadhābin fi-l-qabr.`,

      content3:` Meaning : We have entered the morning and at this very time the whole kingdom belongs to Allah. All praise
            is due to Allah. There is no god but Allah, the One; He has no partner with Him. The entire kingdom belongs
            solely to Him, to Him is all praise due, and He is All-Powerful over everything. My Lord, I ask You for the
            good that is in this day and the good that follows it, and I seek Your protection from the evil that is in
            this day and from the evil that follows it. My Lord, I seek Your protection from laziness and the misery of
            old age. My Lord, I seek Your protection from the torment of the Hell-fire and the punishment of the grave.e heavens and the earth, and their preservation tires Him not. And He is the Most High,
            the Most Great. (2:255)`

    },
    {
      id: 8,
      topic: `Protect yourself from Anxiety, laziness, etc`,
      content1: `اَللّٰهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ ، وَأَعُوْذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ،
            وَأَعُوْذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ ، وَأَعُوْذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ`,
      content2: ` Allāhumma innī aʿūdhu bika min-l-hammi wa-l-ḥazan, wa aʿūdhu bika min-l-ʿajzi wa-l-kasal, wa aʿūdhu bika
            min-l-jubni wa-l-bukhl, wa aʿūdhu bika min ghalabati-d-dayni wa qahri-r-rijāl.`,

      content3:` Meaning : O Allah, I seek Your protection from anxiety and grief. I seek Your protection from inability and laziness.
            I seek Your protection from cowardice and miserliness and I seek Your protection from being overcome by debt
            and being overpowered by men.`

    },
    {
      id: 9,
      topic: `Ask Allah to bless your day`,
      content1: `أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ للهِ رَبِّ الْعَالَمِيْنَ ، اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ خَيْرَ هٰذَا
            الْيَوْمِ ، فَتْحَهُ وَنَصْرَهُ وَنُوْرَهُ وَبَرَكَتَهُ وَهُدَاهُ وَأَعُوْذُبِكَ مِنْ شَرِّ مَا فِيْهِ
            وَشَرِّ مَا بَعْدَهُ`,
      content2: `Aṣbaḥnā wa aṣbaḥa-l-mulku li-llāhi Rabbi-l-ʿālamīn, Allāhumma innī as’aluka khayra hādha-l-yawm, fatḥahū wa
            naṣrahū wa nūrahū wa barakatahū wa hudāhū, wa aʿūdhu bika min sharri mā fīhi wa sharri mā baʿdah.`,

      content3:`Meaning : We have entered the morning and at this very time the whole kingdom belongs to Allah, Lord of the Worlds. O
            Allah, I ask You for the goodness of this day: its victory, its help, its light, and its blessings and
            guidance. I seek Your protection from the evil that is in it and from the evil that follows it.`

    },
    {
      id: 10,
      topic: `Ask Allah to bless your Evening`,
      content1: `أَمْسَيْنَا وَأَمْسَى الْمُلْكُ للهِ رَبِّ الْعَالَمِيْنَ ، اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ خَيْرَ هـٰذِهِ
            اللَّيْلَةِ ، فَتْحَهَا وَنَصْرَهَا وَنُوْرَهـَا وَبَرَكَتَهَا وَهُدَاهـَا وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا
            فِيْهَا وَشَرِّ مَا بَعْدَهَا`,
      content2: `Amsaynā wa amsa-l-mulku li-llāhi Rabbi-l-ʿālamīn, Allāhumma innī as’aluka khayra hādhihi-l-laylah, fatḥahā
            wa naṣrahā wa nūrahā wa barakatahā wa hudāhā, wa aʿūdhu bika min sharri mā fīhā wa sharri mā baʿdahā.`,

      content3:` Meaning : We have entered the evening and at this very time the whole kingdom belongs to Allah, Lord of the Worlds. O
            Allah, I ask You for the goodness of this day/night: its victory, its help, its light, and its blessings and
            guidance. I seek Your protection from the evil that is in it and from the evil that follows it. (Abū Dāwūd)`

    },
    {
      id: 11,
      topic: `Upon entering the Morning and Evening`,
      content1: `اَللّٰهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَإِلَيْكَ الْمَصِيْرُ`,
      content2: `Allāhumma bika amsaynā wa bika aṣbaḥnā wa bika naḥyā wa bika namūtu wa ilayka-l-maṣīr.`,
      content3:` Meaning : O Allah, by You we have entered the evening and by You we enter upon the morning. By You, we live and we
            die, and to You is the resurrection/return. (Tirmidhī)`

    },
    {
      id: 12,
      topic: `Allah will suffice you in everything`,
      content1: `(7x)  حَسْبِيَ اللهُ لَا إِلٰهَ إِلَّا هُوَ ، عَلَيْهِ تَوَكَّلْتُ ، وَهُوَ رَبُّ الْعَرْشِ الْعَظِيْمِ`,
      content2: ` Ḥasbiya-Allāhu lā ilāha illā Hu, ʿalayhi tawakkaltu, wa Huwa Rabbu-l-ʿArshi-l-ʿaẓīm.`,

      content3:` Meaning : Allah is sufficient for me. There is no god but Him. I have placed my trust in Him only and He is the Lord
            of the Magnificent Throne.`

    }
  ]

  toggle = new Array(13).fill(false);
  icon = new Array(13).fill('fa-solid fa-plus');

  onToggle(id: number) {
   
    this.toggle[id] = !this.toggle[id]
 
    if (this.icon[id] == 'fa-solid fa-plus') {
      this.icon[id] = 'fa-solid fa-minus';
    } else {
      this.icon[id] = 'fa-solid fa-plus';
    }
  }


}
