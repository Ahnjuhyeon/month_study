import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .required("이메일을 작성해주세요")
    .matches(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
      "이메일 형식이 아닙니다"
    ),
  pw: yup
    .string()
    .required("비밀번호는 필수 입력입니다.")
    .matches(
      // /(?=.*?[a-z])(?=.*?[A-Z])/,
      /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*])/,
      "비밀번호는 대소문자 특수문자가 포함되어야 합니다."
    )
    .min(8, "비밀번호는 8자리 이상입니다"),
  pwconfirm: yup
    .string()
    .required("비밀번호 확인은 필수 입력입니다.")
    .oneOf([yup.ref("pw"), null], "비밀 번호가 일치하지 않습니다."),
});

export const schema2 = yup.object().shape({
  email: yup
    .string()
    .required("이메일을 작성해주세요")
    .matches(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
      "이메일 형식이 아닙니다"
    ),
  pw: yup
    .string()
    .required("비밀번호는 필수 입력입니다.")
    .matches(
      /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*])/,
      "비밀번호는 대소문자 특수문자가 포함되어야 합니다."
    )
    .min(8, "비밀번호는 8자리 이상입니다"),
});

/*
.oneOf([yup.ref("password"), null],
yup.ref("password")를 사용하여 비밀번호 필드의 값을 참조하고,
oneOf 메소드를 사용하여 두 값이 일치하는지 여부를 확인하도록 수정
비밀번호와 비밀번호 확인이 일치하지 않을 때 해당 오류 메시지가 표시.
*/
