import { IDeleteUser } from "../repositories/deleteUser";

export class DeleteUserService implements IDeleteUser {
  constructor(private readonly deleteUserRepo: IDeleteUser) {}
  async DeleteUser(id: any): Promise<void> {
    await this.deleteUserRepo.DeleteUser(id);
  }
}
