import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: wp('7%'),
    paddingTop: hp('3%'),
  },
  menu: {
    height: hp('10%'),

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textWelcome: {
    fontSize: wp('7.5%'),
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  viewSortNumber: {
    alignItems: 'center',
    justifyContent: 'center',

    width: wp('86%'),
    height: hp('50%'),

    //marginBottom: hp('3%'),
    //marginTop: hp('2%'),

    borderWidth: wp('3%'),
    borderRadius: wp('50%'),
    borderColor: '#7264ab',
  },
  numberSort: {
    fontSize: wp('25%'),
    fontWeight: 'bold',
  },
  textNumberSort: {
    marginTop: hp('2.5%'),

    fontSize: wp('7%'),
    fontWeight: 'bold',
  },
  viewMax: {
    height: hp('5%'),

    marginTop: wp('1%'),
    marginBottom: hp('2%'),

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textMax: {
    fontSize: wp('5.7%'),
    fontWeight: 'bold',
  },
  inputNumber: {
    width: wp('15%'),
    height: hp('6.5%'),

    marginLeft: wp('1.5%'),

    backgroundColor: '#fff',
    borderRadius: 4,
  },
  viewButton: {
    alignItems: 'center',
  },
  buttonSort: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: hp('2.5%'),

    backgroundColor: '#7264ab',

    height: hp('10%'),
    width: wp('86%'),
    borderRadius: 4,
  },
  textButtonSort: {
    fontSize: wp('7.5%'),
    fontWeight: '700',
  },
  imgDice: {
    marginLeft: wp('1.5%'),

    height: wp('6%'),
    width: wp('6%'),
  },
});
