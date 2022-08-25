var config = {
    style: 'mapbox://styles/atticusjohnson/cl13lvar3002114mzd3vpqgoc',
    accessToken: 'pk.eyJ1IjoiYXR0aWN1c2pvaG5zb24iLCJhIjoiY2wyNjdyZmZ6MmhsNjNjcGRicGh4dWxqaiJ9.1IW2RLVP09GRDjpTfkAhzA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    title: '“The Map of Race is the Map of Richmond”:',
    subtitle: 'Eviction and the Enduring Regimes of Racialized Dispossession and Political Demobilization',
    byline: 'By the RVA Eviction Lab Staff',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'chpt-one',
            alignment: 'center',
            hidden: false,
            title: 'Setting the Stage',
            image: './images/cover.jpg',
            description: 'Richmond, Virginia was incorporated in 1742 and has a long divisive history. In the summer of 2020, many took to the streets to protest the high-profile police killings of Black individuals across the country and in Richmond. There was not a single incident that protesters were responding to but, rather centuries of racial violence and dispossession.',
            location: {
                center: [-81.664537, 37.986404],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: '2019blkpop', opacity: 0 },
                {layer: 'mhincome', opacity: 0},
                {layer: 'mg-rent',opacity: 0},
                {layer: 'urban-renewal', opacity: 0},
                {layer: 'ea', opacity: 0},
                {layer: 'eb', opacity: 0},
                {layer: 'ec', opacity: 0}

            ],
            onChapterExit: [
                { layer: '2019blkpop', opacity: 0 },
                {layer: 'mhincome', opacity: 0},
                {layer: 'mg-rent',opacity: 0},
                {layer: 'urban-renewal', opacity: 0},
                {layer: 'ea', opacity: 0},
                {layer: 'eb', opacity: 0},
                {layer: 'ec', opacity: 0}               
            ]
        },
        {
            id: 'chpt-two',
            alignment: 'right',
            hidden: false,
            title: 'Intro Continued',
            image: '',
            description: "Eviction is another problem that is widely recognized but often treated in the same individualized way, divorcing it from its systemic and historical context, and therefore limiting understanding and potential to address it. Much of the recent attention to eviction as a public policy concern can be traced to 2018 when the Princeton Eviction Lab released a comprehensive dataset of eviction rates down to the census block group level. While the statewide eviction rate was 5.12%, Richmond’s eviction rate over the 16 years studied was more than 11%, giving Richmond the second highest-rate of legal evictions in large cities in the country. Yet eviction is not distributed evenly across the city. In Richmond’s white west end, the rate was three percent or lower, while in some neighborhoods in Richmond’s northside, southside and east end, the rates were more than three times the citywide rate, meaning that more than a third of renters were evicted every year. When controlling for factors such as income, home value, and other factors, neighborhood racial composition was the strongest predictor of neighborhood eviction rates in Richmond.",
            location: {
                center: [-77.43576, 37.54065],
                zoom: 13.0,
                pitch: 60,
                bearing: 16
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: '2019blkpop', opacity: 0},
                {layer: 'mhincome', opacity: 0},
                {layer: 'mg-rent',opacity: 0},
                {layer: 'urban-renewal', opacity: 0},
                {layer: 'ea', opacity: 0},
                {layer: 'eb', opacity: 0},
                {layer: 'ec', opacity: 0}

            ],
            onChapterExit: [
                {layer: '2019blkpop', opacity: 0},
                {layer: 'mhincome', opacity: 0},
                {layer: 'mg-rent',opacity: 0},
                {layer: 'urban-renewal', opacity: 0},
                {layer: 'ea', opacity: 0},
                {layer: 'eb', opacity: 0},
                {layer: 'ec', opacity: 0}   
            ]
        },
        {
            id: 'chpt-three',
            alignment: 'full',
            hidden: false,
            title: 'Richmond Post the Civil War',
            image: './images/plate5.jpg',
            description: "Virginia saw many of the battles fought during the Civil War. Reconstruction, a process started before the war officially ended, progressed quickly in the city of Richmond. Newly freed men began to establish churches, homes, and businesses within the city. But this Reconstruction period did not last long. In 1902, Virginia ratified a new constitution. This constitution took away many of the freedoms granted to Black individuals during the Reconstruction period, including the right to vote and the ability of Black men to participate in politics. ",
            location: {
                center: [-77.44004, 37.54446],
                zoom: 14.2,
                pitch: 60,
                bearing: 16
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                 layer: '2019blkpop',
                 opacity: 0
                 },
                {
                    layer: 'mhincome',
                    opacity: 0

                },
                {
                    layer: 'mg-rent',
                    opacity: 0
                },
                {
                    layer: 'urban-renewal',
                    opacity: 0
                },
                {
                    layer: 'ea',
                    opacity: 0
                },
                {
                    layer: 'eb',
                    opacity: 0
                },
                {
                    layer: 'ec',
                    opacity: 0
                }


            ],
            onChapterExit: [
                 {
                 layer: '2019blkpop',
                 opacity: 0
                 },
                {
                    layer: 'mhincome',
                    opacity: 0

                },
                {
                    layer: 'mg-rent',
                    opacity: 0
                },
                {
                    layer: 'urban-renewal',
                    opacity: 0
                },
                {
                    layer: 'ea',
                    opacity: 0
                },
                {
                    layer: 'eb',
                    opacity: 0
                },
                {
                    layer: 'ec',
                    opacity: 0
                }


            ]
        },
        {
            id: 'chpt-four',
            alignment: 'right',
            hidden: false,
            title: 'What is Urban Renewal?',
            image: './images/urbanrenewal.png',
            description: 'There are multiple definitions for urban renewal. It is the process in which “slums” and “undesirable” neighborhoods are demolished to make way for new housing and business properties. Richmond had major urban renewal projects during the 50s, 60s, and 70s, including the renewal of Fulton Hill. Urban renewal is a destructive process that removes people from their neighborhoods for the sake of profit. ',
            location: {
                center: [ -77.39091, 37.51423],
                zoom: 12.89,
                pitch: 55.50,
                bearing: 16.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                 layer: '2019blkpop',
                 opacity: 0
                 },
                {
                    layer: 'mhincome',
                    opacity: 0

                },
                {
                    layer: 'mg-rent',
                    opacity: 0
                },
                {
                    layer: 'urban-renewal',
                    opacity: 1
                },
                {
                    layer: 'ea',
                    opacity: 0
                },
                {
                    layer: 'eb',
                    opacity: 0
                },
                {
                    layer: 'ec',
                    opacity: 0
                }


            ],
            onChapterExit: [
                {
                 layer: '2019blkpop',
                 opacity: 0
                 },
                {
                    layer: 'mhincome',
                    opacity: 0

                },
                {
                    layer: 'mg-rent',
                    opacity: 0
                },
                {
                    layer: 'urban-renewal',
                    opacity: 0
                },
                {
                    layer: 'ea',
                    opacity: 0
                },
                {
                    layer: 'eb',
                    opacity: 0
                },
                {
                    layer: 'ec',
                    opacity: 0
                }


            ]
        },
        {
            id: 'chpt-five',
            alignment: 'left',
            hidden: false,
            title: 'Disposession',
            image: './path/to/image/source.png',
            description: 'How was land taken?',
            location: {
                center: [-77.5633017, 37.5247764],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                 layer: '2019blkpop',
                 opacity: 0
                 },
                {
                    layer: 'mhincome',
                    opacity: 1

                },
                {
                    layer: 'mg-rent',
                    opacity: 0
                },
                {
                    layer: 'urban-renewal',
                    opacity: 0
                },
                {
                    layer: 'ea',
                    opacity: 0
                },
                {
                    layer: 'eb',
                    opacity: 0
                },
                {
                    layer: 'ec',
                    opacity: 0
                }


            ],
            onChapterExit: [
                {
                 layer: '2019blkpop',
                 opacity: 0
                 },
                {
                    layer: 'mhincome',
                    opacity: 0

                },
                {
                    layer: 'mg-rent',
                    opacity: 0
                },
                {
                    layer: 'urban-renewal',
                    opacity: 0
                },
                {
                    layer: 'ea',
                    opacity: 0
                },
                {
                    layer: 'eb',
                    opacity: 0
                },
                {
                    layer: 'ec',
                    opacity: 0
                }


            ]
        },
        {
            id: 'chpt-six',
            alignment: 'full',
            hidden: false,
            title: 'An oral history interview with Ida Ellett, December 13, 2011. Part of the Fulton Oral History Project; Interview by Dr. Caroline Morris, Transcription by Erin O’Donnovan',
            image: './images/fulton.jpg',
            description: 'In an interview conducted by Dr. Caroline Morris, Ida Ellett discussed growing up in the historic neighborhood of Fulton, Richmond. Coming from a large family, the Ellett’s originally lived in North Carolina on a sharecropper’s farm. When the family moved to Richmond, Ida’s mother worked in a tobacco factory. As a child, Ida lived and attended church in the Fulton area. She talks about growing up during the 30’s during the height of the Great Depression. <i>‘We didn’t know any different. We didn’t have anything and our friends didn’t have anything, there were a few of them and those who did have shared’</i>. She attended high school at Armstrong, the only Black high school in Richmond. During the war years of the 40’s she lived in D.C. working for the Census Bureau. Ida stayed in D.C. for 4 to five years before returning to Richmond.  She married Robert Ellett after moving back to Richmond and was married for 53 years.  For a short period, the married couple lived in Varina before moving back to Fulton, Richmond. Ida recalls paying the poll tax in order to vote in Richmond. Ida was also a campaigner for Oliver Hill and worked with the Richmond NAACP. In 1978, Ida went to VCU to complete a degree in Community Service.  When asked about the urban renewal of Fulton Ida stated: <i>‘Well you know I haven’t really thought about it a lot, you know I did feel you know it’s such a waste to tear down the way they did. Because when they started when they condemned and moved people out, it scattered them so, and I didn’t know where they were…’</i>',
            location: {
                center: [-77.5633017, 37.5247764],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                 layer: '2019blkpop',
                 opacity: 0
                 },
                {
                    layer: 'mhincome',
                    opacity: 0

                },
                {
                    layer: 'mg-rent',
                    opacity: 0
                },
                {
                    layer: 'urban-renewal',
                    opacity: 0
                },
                {
                    layer: 'ea',
                    opacity: 0
                },
                {
                    layer: 'eb',
                    opacity: 0
                },
                {
                    layer: 'ec',
                    opacity: 0
                }


            ],
            onChapterExit: [
                {
                 layer: '2019blkpop',
                 opacity: 0
                 },
                {
                    layer: 'mhincome',
                    opacity: 0

                },
                {
                    layer: 'mg-rent',
                    opacity: 0
                },
                {
                    layer: 'urban-renewal',
                    opacity: 0
                },
                {
                    layer: 'ea',
                    opacity: 0
                },
                {
                    layer: 'eb',
                    opacity: 0
                },
                {
                    layer: 'ec',
                    opacity: 0
                }


            ]
        },
        
        {
            id: 'chpt-eight',
            alignment: 'left',
            hidden: false,
            title: 'Rent in Richmond, VA',
            image: '',
            description: '<span style="background:#ffffb2"> <label style="margin-top: -25px; color:black">   0   </label></span><span style="background:#fed976"> <label style="margin-top: -25px; color:black">   438   </label></span><span style="background:#feb24c"> <label style="margin-top: -25px; color:black">   875   </label></span><span style="background:#fd8d3c"> <label style="margin-top: -25px; color:black">   1094   </label></span><span style="background:#f03b20"> <label style="margin-top: -25px; color:black">   1313   </label></span><span style="background:#bd0026"> <label style="margin-top: -25px; color:black">   1750   </label></span> </br> Like many cities across the United States, Richmond has seen an increase in rent since the start of the Covid-19 pandemic. But, this increase in rent began long before the lockdowns. Cont. figure on rent increase?',
            location: {
                center: [ -77.57276, 37.52949],
                zoom: 11,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                 layer: '2019blkpop',
                 opacity: 0
                 },
                {
                    layer: 'mhincome',
                    opacity: 0

                },
                {
                    layer: 'mg-rent',
                    opacity: 1
                },
                {
                    layer: 'urban-renewal',
                    opacity: 0
                },
                {
                    layer: 'ea',
                    opacity: 0
                },
                {
                    layer: 'eb',
                    opacity: 0
                },
                {
                    layer: 'ec',
                    opacity: 0
                }


            ],
            onChapterExit: [
                {
                    layer: '2019blkpop',
                    opacity: 0
                    },
                    {
                       layer: 'mhincome',
                       opacity: 0
                       },
                       {
                        layer: 'mg-rent',
                        opacity: 0
                    },
                    {
                        layer: 'urban-renewal',
                        opacity: 0
                    },
                    {
                        layer: 'ea',
                        opacity: 0
                    },
                    {
                        layer: 'eb',
                        opacity: 0
                    },
                    {
                        layer: 'ec',
                        opacity: 0
                    }
    
            ]
        },
        {
            id: 'chpt-nine',
            alignment: 'left',
            hidden: false,
            title: 'Eviction Rates In Richmond, Virginia',
            image: './path/to/image/source.png',
            description: 'edit location for map, make sure to check bearing.',
            location: {
                center: [ -77.57276, 37.52949],
                zoom: 11,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '2019blkpop',
                    opacity: 0
                    },
                    {
                       layer: 'mhincome',
                       opacity: 0
                       },
                       {
                        layer: 'mg-rent',
                        opacity: 0
                    },
                    {
                        layer: 'urban-renewal',
                        opacity: 0
                    },
                    {
                        layer: 'ea',
                        opacity: 1
                    },
                    {
                        layer: 'eb',
                        opacity: 0
                    },
                    {
                        layer: 'ec',
                        opacity: 0
                    }
    
            ],
            onChapterExit: [
                {
                    layer: '2019blkpop',
                    opacity: 0
                    },
                    {
                       layer: 'mhincome',
                       opacity: 0
                       },
                       {
                        layer: 'mg-rent',
                        opacity: 0
                    },
                    {
                        layer: 'urban-renewal',
                        opacity: 0
                    },
                    {
                        layer: 'ea',
                        opacity: 0
                    },
                    {
                        layer: 'eb',
                        opacity: 0
                    },
                    {
                        layer: 'ec',
                        opacity: 0
                    }
    
            ]
        },
        {
            id: 'chpt-ten',
            alignment: 'right',
            hidden: false,
            title: 'Eviction Rates In Richmond, Virginia second map',
            image: './path/to/image/source.png',
            description: 'edit location for map, make sure to check bearing.',
            location: {
                center: [ -77.37898, 37.52949],
                zoom: 11,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '2019blkpop',
                    opacity: 0,
                    duration: 5000
                    },
                    {
                       layer: 'mhincome',
                       opacity: 0
                       },
                       {
                        layer: 'mg-rent',
                        opacity: 0
                    },
                    {
                        layer: 'urban-renewal',
                        opacity: 0
                    },
                    {
                        layer: 'ea',
                        opacity: 0
                    },
                    {
                        layer: 'eb',
                        opacity: 1
                    },
                    {
                        layer: 'ec',
                        opacity: 0
                    }
    
            ],
            onChapterExit: [
                {
                    layer: '2019blkpop',
                    opacity: 0
                    },
                    {
                       layer: 'mhincome',
                       opacity: 0
                       },
                       {
                        layer: 'mg-rent',
                        opacity: 0
                    },
                    {
                        layer: 'urban-renewal',
                        opacity: 0
                    },
                    {
                        layer: 'ea',
                        opacity: 0
                    },
                    {
                        layer: 'eb',
                        opacity: 0
                    },
                    {
                        layer: 'ec',
                        opacity: 0
                    }
    
            ]
        },
        {
            id: 'chpt-eleven',
            alignment: 'right',
            hidden: false,
            title: 'Eviction Rates In Richmond, Virginia third map',
            image: './path/to/image/source.png',
            description: 'edit location for map, make sure to check bearing.',
            location: {
                center: [ -77.37898, 37.52949],
                zoom: 11,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '2019blkpop',
                    opacity: 0
                    },
                    {
                       layer: 'mhincome',
                       opacity: 0
                       },
                       {
                        layer: 'mg-rent',
                        opacity: 0
                    },
                    {
                        layer: 'urban-renewal',
                        opacity: 0
                    },
                    {
                        layer: 'ea',
                        opacity: 0
                    },
                    {
                        layer: 'eb',
                        opacity: 0
                    },
                    {
                        layer: 'ec',
                        opacity: 1
                    }
    
            ],
            onChapterExit: [
                {
                    layer: '2019blkpop',
                    opacity: 0
                    },
                    {
                       layer: 'mhincome',
                       opacity: 0
                       },
                       {
                        layer: 'mg-rent',
                        opacity: 0
                    },
                    {
                        layer: 'urban-renewal',
                        opacity: 0
                    },
                    {
                        layer: 'ea',
                        opacity: 0
                    },
                    {
                        layer: 'eb',
                        opacity: 0
                    },
                    {
                        layer: 'ec',
                        opacity: 0
                    }
    
            ]
        },
        {
            id: 'chpt-twelve',
            alignment: 'full',
            hidden: false,
            title: 'An oral history interview with Evelyn Bowman, November 29, 2011. Part of the Fulton Oral History Project: Interview by Dr. Caroline Morris, Transcription by Erin O’Donnovan',
            image: './images/fulton_1952.jpg',
            description: 'In an interview conducted by Dr. Caroline Morris, Evelyn Bowman speaks of her time in Fulton. Bowman was born and raised in Fulton, Richmond where she lived until 1971. She graduated high school in 1941 and attended Virginia Union until the start of the War. She was heavily involved with Mt. Zion Baptist Church and was part of the Fulton Improvement Association. The association worked hard to for structural change in the Fulton neighborhood. Bowman discusses the many black businesses located in Fulton. She also recalls working in the American Tobacco Factory during the summers to make extra money. When asked about the urban renewal of Fulton, Bowman stated: <i> Urban renewal, it didn’t come overnight. It was implemented.</i> She goes on to tell a story about how the Fulton Improvement Association and other members of the community would go to City Council meetings. Primarily in order to keep properties from being taken in the neighborhood. ',
            location: {
                center: [-77.5633017, 37.5247764],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '2019blkpop',
                    opacity: 0
                    },
                    {
                       layer: 'mhincome',
                       opacity: 0
                       },
                       {
                        layer: 'mg-rent',
                        opacity: 0
                    },
                    {
                        layer: 'urban-renewal',
                        opacity: 0
                    },
                    {
                        layer: 'ea',
                        opacity: 0
                    },
                    {
                        layer: 'eb',
                        opacity: 0
                    },
                    {
                        layer: 'ec',
                        opacity: 0
                    }
    
            ],
            onChapterExit: [
                {
                    layer: '2019blkpop',
                    opacity: 0
                    },
                    {
                       layer: 'mhincome',
                       opacity: 0
                       },
                       {
                        layer: 'mg-rent',
                        opacity: 0
                    },
                    {
                        layer: 'urban-renewal',
                        opacity: 0
                    },
                    {
                        layer: 'ea',
                        opacity: 0
                    },
                    {
                        layer: 'eb',
                        opacity: 0
                    },
                    {
                        layer: 'ec',
                        opacity: 0
                    }
    
            ]
        },
        {
            id: 'chpt-thirteen',
            alignment: 'center',
            hidden: false,
            title: 'How is Space Racialized?',
            image: './path/to/image/source.png',
            description: 'review information given thus far and show how it leads to racialized space',
            location: {
                center: [-77.5633017, 37.5247764],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '2019blkpop',
                    opacity: 1
                    },
                    {
                       layer: 'mhincome',
                       opacity: 0
                       },
                       {
                        layer: 'mg-rent',
                        opacity: 0
                    },
                    {
                        layer: 'urban-renewal',
                        opacity: 0
                    },
                    {
                        layer: 'ea',
                        opacity: 0
                    },
                    {
                        layer: 'eb',
                        opacity: 0
                    },
                    {
                        layer: 'ec',
                        opacity: 0
                    }
    
            ],
            onChapterExit: [
                {
                    layer: '2019blkpop',
                    opacity: 1
                    },
                    {
                       layer: 'mhincome',
                       opacity: 0
                       },
                       {
                        layer: 'mg-rent',
                        opacity: 0
                    },
                    {
                        layer: 'urban-renewal',
                        opacity: 0
                    },
                    {
                        layer: 'ea',
                        opacity: 0
                    },
                    {
                        layer: 'eb',
                        opacity: 0
                    },
                    {
                        layer: 'ec',
                        opacity: 0
                    }
    
            ]
        },
        {
            id: 'chpt-14',
            alignment: 'left',
            hidden: false,
            title: 'How is Space Racialized? continued',
            description: '<span style="background:#edf8fb"> <label style="margin-top: -25px; color:black">   0   </label></span><span style="background:#b3cde3"> <label style="margin-top: -25px; color:black">   1293   </label></span><span style="background:#8c96c6"> <label style="margin-top: -25px; color:black">   2585   </label></span><span style="background:#8856a7"> <label style="margin-top: -25px; color:black">   3878   </label></span><span style="background:#810f7c"> <label style="margin-top: -25px; color:black">   5170   </label></span> <br> The map to the right shows a breakdown of the African American population in Richmond, VA. When we discuss the racialization of space, it is hard to not recognize how people are contained to certain neighborhoods. Redlining, exclusionary zoning, and urban renewal forces marginalized communities into “Black neighborhoods”.  Cont. expand on how space is racialized.',
            location: {
                center: [ -77.57276, 37.52949],
                zoom: 11,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '2019blkpop',
                    opacity: 1
                },
                {
                    layer: 'mhincome',
                    opacity: 0
                },
                {
                    layer: 'mg-rent',
                    opacity: 0
                },
                {
                    layer: 'urban-renewal',
                    opacity: 0
                },
                {
                    layer: 'ea',
                    opacity: 0
                },
                {
                    layer: 'eb',
                    opacity: 0
                },
                {
                    layer: 'ec',
                    opacity: 0
                }

            ],
            onChapterExit: [
                {
                    layer: '2019blkpop',
                    opacity: 0
                    },
                    {
                        layer: 'mg-rent',
                        opacity: 0
                    },
                    {
                        layer: 'urban-renewal',
                        opacity: 0
                    },
                    {
                        layer: 'ea',
                        opacity: 0
                    },
                    {
                        layer: 'eb',
                        opacity: 0
                    },
                    {
                        layer: 'ec',
                        opacity: 0
                    }
    
            ]
        },
        {
            id: 'chpt-15',
            alignment: 'right',
            hidden: false,
            title: 'Reparative Planning as a Solution',
            image: './path/to/image/source.png',
            description: 'talk about reparative planning as a solution, what it entails, etc.',
            location: {
                center: [-77.5633017, 37.5247764],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '2019blkpop',
                    opacity: 0
                },
                {
                    layer: 'mhincome',
                    opacity: 0
                },
                {
                    layer: 'mg-rent',
                    opacity: 0
                },
                {
                    layer: 'urban-renewal',
                    opacity: 0
                },
                {
                    layer: 'ea',
                    opacity: 0
                },
                {
                    layer: 'eb',
                    opacity: 0
                },
                {
                    layer: 'ec',
                    opacity: 0
                }
    
            ],
            onChapterExit: [
                {
                    layer: '2019blkpop',
                    opacity: 0
                },
                {
                    layer: 'mhincome',
                    opacity: 0
                },
                {
                    layer: 'mg-rent',
                    opacity: 0
                },
                {
                    layer: 'urban-renewal',
                    opacity: 0
                },
                {
                    layer: 'ea',
                    opacity: 0
                },
                {
                    layer: 'eb',
                    opacity: 0
                },
                {
                    layer: 'ec',
                    opacity: 0
                }
    
            ]
        }
    ]
};
