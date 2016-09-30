class ClosetsController < ApplicationController
  def new
    @closets = Closet.new
    @closets.user = current_user
    @closets.save
    redirect_to @closets
  end

  def create
  end

  def show
  end

  def index
    @closets = Closet.all
  end

=begin  def destroy
    @email_submission = EmailSubmission.find(params[:id])
    if @email_submission.user == current_user
      @email_submission.destroy
    end
    redirect_to new_email_submission_path
     #authorize @email_submission

    if @email_submission.destroy
       flash[:notice] = "\"#{@email_submission.title}\" was deleted successfully."
       redirect_to new_email_submission_path
     else
       flash[:error] = "There was an error deleting."
       render :show
     end
=end

  private

  def closet_params

  end
end
