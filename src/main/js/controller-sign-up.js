$(document).ready(function()
{
    $('#form-sign-up').submit(function()
    {
        success=true;
        if($('#username').val()==='')
        {
            $('#help-username').removeClass('d-none');
            success=false;
        }
        else
            $('#help-username').addClass('d-none');
        $('#form-username').addClass('was-validated');
        if($('#password').val()==='')
        {
            $('#help-password').removeClass('d-none');
            success=false;
        }
        else
        {
            $('#help-password').addClass('d-none');
            if($('#password2').val()!==$('#password').val())
            {
                $('#help-password2').removeClass('d-none');
                success=false;
            }
            else
                $('#help-password2').addClass('d-none');
            $('#form-password2').addClass('was-validated');
        }
        $('#form-password').addClass('was-validated');
        if($('#name').val()==='')
        {
            $('#help-name').removeClass('d-none');
            success=false;
        }
        else
            $('#help-name').addClass('d-none');
        $('#form-name').addClass('was-validated');
        if($('#email').val()==='')
        {
            $('#help-email').removeClass('d-none');
            success=false;
        }
        else
            $('#help-email').addClass('d-none');
        $('#form-email').addClass('was-validated');
        return success;
    });
});