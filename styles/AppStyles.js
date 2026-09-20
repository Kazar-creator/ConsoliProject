import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  /*-------------------------GENERAL LAYOUT-------------------------*/
  //HEADER
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    alignItems: 'center',   
    zIndex: 100,
    elevation: 100, 
  },
  miurLogo: {
    height: 200,
    width: 200,
  },
  itsLogo: {
    height: 200,
    width: 550,
  },
  profileLogo: {
    height: 70,
    width: 70,
  },
    profileWrapper: {
    position: 'relative',
  },
  profileMenu: {
    position: 'absolute',
    top: 75,
    right: -40,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dee2e6',
    minWidth: 160,
    zIndex: 1000,
    elevation: 1000,
    ...Platform.select({
      web: {
        boxShadow: '2px 2px 6px rgba(51, 51, 51, 0.3)',
      },
      default: {
        shadowColor: '#333333',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 1000,
      },
    }),
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  profileMenuItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
  },
  profileMenuItemLast: {
    borderBottomWidth: 0,
  },
  profileMenuText: {
    fontSize: 15,
    color: '#333333',
  },

  //BODY (Sidebar, Scrollview, Footer)
  bodyContainer: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 2,
  },
  sideBar: {
    backgroundColor:'#ffffff',
    borderRightWidth: 2,
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
  },

  //SIDEBAR BUTTON
  buttonStyle: {
    borderRadius: 10,
    width: 100,
    height: 45,
    backgroundColor: '#008DC9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginLeft: 40,
    marginRight: 40,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 18,
  },
  buttonPressed: {
    opacity: 0.6,
  },
  buttonHover: {
    backgroundColor: '#008DC9',
    transform: [{ scale: 1.09 }],
    shadowColor:"#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 10,
  },
  buttonShadow: {
    ...Platform.select({
      web: {
        boxShadow: '6px 6px 4px rgba(51, 51, 51, 0.6)',
      },
      default: {
        shadowColor: '#333333',
        shadowOffset: {
          width: 6,
          height: 6,
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
        elevation: 10,
      },
    }),
  },

  //FOOTER
  footerContainer: {
    backgroundColor: '#008DC9',
    width: '100%',
    height: 100,
    borderTopWidth: 2,
    marginTop: 20,
  },
  footerText: {
    color: 'white',
    marginLeft: 40,
  },

  /*-------------------------LOGIN-------------------------*/
  formContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderWidth:1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formBox:{
    width: 400,
    borderWidth:1,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#dee2e6',
    borderRadius: 5,
  },
  formText: {
    fontSize: 30,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },

  /*-------------------------HOME-------------------------*/
  //WELCOME
  welcomeTitle: {
    color: '#154f78',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userInfoText: {
    color: '#333333',
    fontSize: 16,
  },
  customButtonStyle: {
    borderRadius: 10,
    backgroundColor: '#008DC9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeRow: {
    flexDirection: 'row',
    marginLeft: 20,
    marginBottom: 20,
    borderWidth: 1,
  },
  homeCell: {
    flex: 1,
    overflow: 'hidden',
    borderWidth: 1,
  },
  
  //CALENDAR
  calendarContainer: {
  alignSelf: 'center',
  borderRadius: 15,
  overflow: 'hidden',
  width: '100%',
  maxWidth: 350,
  padding: 12,          

  backgroundColor: '#008DC9',
  ...Platform.select({
    web: {
      boxShadow: '6px 6px 4px rgba(51, 51, 51, 0.6)',
    },
    default: {
      shadowColor: '#333333',
      shadowOffset: { width: 6, height: 6 },
      shadowOpacity: 0.6,
      shadowRadius: 4,
      elevation: 10,
    },
  }),
},
  calendar: {
    borderRadius: 10, 
    overflow: 'hidden',
  },
  calendarDetailBox: {
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
  },
  calendarDetailText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  //EVENT LIST (nel box dettaglio giorno selezionato)
  eventListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
  },
  eventListDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  eventListName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
  },
  eventListTime: {
    fontSize: 12,
    color: '#6c757d',
    marginTop: 2,
  },
  addEventButton: {
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#008DC9',
    alignItems: 'center',
  },
  addEventButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },

  //EVENT FORM MODAL
  eventModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventModalBox: {
    width: 420,
    maxWidth: '92%',
    maxHeight: '85%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    ...Platform.select({
      web: {
        boxShadow: '2px 2px 10px rgba(51, 51, 51, 0.4)',
      },
      default: {
        shadowColor: '#333333',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 10,
      },
    }),
  },
  eventModalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#154f78',
  },
  eventModalDate: {
    fontSize: 13,
    color: '#6c757d',
    marginBottom: 15,
    textTransform: 'capitalize',
  },
  eventModalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  eventModalTextArea: {
    height: 70,
    textAlignVertical: 'top',
  },
  eventModalColorRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 15,
  },
  eventModalColorDot: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'transparent',
  },
  eventModalColorDotSelected: {
    borderColor: '#333333',
  },
  eventModalChipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 5,
  },
  eventModalChip: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#dee2e6',
    backgroundColor: '#f8f9fa',
  },
  eventModalChipSelected: {
    backgroundColor: '#008DC9',
    borderColor: '#008DC9',
  },
  eventModalChipText: {
    fontSize: 13,
    color: '#333333',
  },
  eventModalChipTextSelected: {
    color: '#ffffff',
    fontWeight: '600',
  },
  eventModalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    marginTop: 15,
  },
  eventModalButton: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  eventModalCancelButton: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  eventModalCancelButtonText: {
    color: '#333333',
    fontWeight: '600',
  },
  eventModalSaveButton: {
    backgroundColor: '#008DC9',
  },
  eventModalSaveButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  eventModalDeleteButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#DC3545',
    marginRight: 'auto',
  },
  eventModalDeleteButtonText: {
    color: '#DC3545',
    fontWeight: '600',
  },
  
  /*-------------------------PROFILE-------------------------*/
  datiUtente: {
    margin: 20,
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#008DC9',
    ...Platform.select({
      web: {
        boxShadow: '2px 2px 6px rgba(51, 51, 51, 0.6)',
      },
      default: {
        shadowColor: "#333333",
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.6,
        shadowRadius: 6,
        elevation: 5,
      },
    }),
  },
  datiUtenteWrapper: {
    borderBottomWidth: 2,
    paddingBottom: 8,
    marginBottom: 8,
},
  titolo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    margin: 8,
    marginBottom: 12,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  sottotitolo: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
    margin: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.3,
    marginBottom: 6,
  },
  testo: {
    fontSize: 14,
    fontWeight: '500',
    margin: 8,
    color: 'white',
  },

  /*-------------------------LISTS-------------------------*/
  //MAIN CONTAINER
  listContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dee2e6',
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    borderBottomWidth: 2,
    paddingBottom: 10,
  },
  blueTitle: {
    color: '#0056b3',
    borderBottomColor: '#0056b3',
  },
  redTitle: {
    color: '#DC3545',
    borderBottomColor: '#DC3545',
  },

  //CARD CONTAINER
  itemCard: {
    backgroundColor: 'white',
    padding: 12,
    marginVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#dee2e6',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 1,
  }, //L'intero blocco di uno Studente/Azienda
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }, //Riga che comprende Info e Bottoni
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  }, //Contenitore dei bottoni

  //INFO SECTION
  itemInfo: {
    flex: 1,
  }, //Nome, Cognome e Corso
  itemName: {
    fontSize: 16,
    fontWeight: '600',
  }, //Nome Studente/Azienda
  blueName: {
    color: '#0056b3',
  }, //Colore per gli Studenti
  redName: {
    color: '#DC3545',
  }, //Colore per le Aziende
  itemDetail: {
    fontSize: 12,
    color: '#6c757d',
    marginTop: 3,
  }, //Stile per il Corso
  
  //STUDENTS BUTTONS
  callButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#34C759',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }, //Chiamata con lo Studente
  callButtonHover: {
    backgroundColor: '#69d484',
    borderColor: '#34C759',
  },
  interviewButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FF9500',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }, //Colloquio con lo Studente
  interviewButtonHover: {
    backgroundColor: '#f9ae45',
    borderColor: '#FF9500',
  },

  //COMPANIES BUTTONS
  contactButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  contatButtonHover: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  quadratinoOfferte: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#8E44AD',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  quadratinoHoverOfferte: {
    backgroundColor: '#8E44AD',
    borderColor: '#8E44AD',
  },

  //BUTTON TEXT STYLE
  listButtonText: {
    fontSize: 18,
    color: '#333333',
  },
  listButtonTextHover: {
    color: '#f90707',
  },

});

export default styles;